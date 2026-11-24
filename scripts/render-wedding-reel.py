#!/usr/bin/env python3
"""Render the invitation PDF as a 9:16 animated Instagram reel."""

from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "output/pdf/Shalin_Isha_Wedding_Invitation.pdf"
AUDIO = ROOT / "public/audio/wedding-music.m4a"
FRAMES = ROOT / "tmp/reel-pages"
OUTPUT = ROOT / "output/video/Shalin_Isha_Wedding_Invitation_Reel.mp4"

WIDTH, HEIGHT = 1080, 1920
FPS = 30
SCENE_SECONDS = 5
TRANSITION_SECONDS = 0.7
PAGE_COUNT = 7
SCENE_FRAMES = FPS * SCENE_SECONDS
TOTAL_SECONDS = SCENE_SECONDS * PAGE_COUNT - TRANSITION_SECONDS * (PAGE_COUNT - 1)


def run(args: list[str]) -> None:
    subprocess.run(args, check=True)


def main() -> None:
    FRAMES.mkdir(parents=True, exist_ok=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    run([
        "pdftoppm", "-f", "1", "-l", str(PAGE_COUNT), "-png", "-r", "254",
        str(PDF), str(FRAMES / "card"),
    ])

    inputs: list[str] = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "warning"]
    for page in range(1, PAGE_COUNT + 1):
        inputs += [
            "-loop", "1", "-framerate", str(FPS), "-t", str(SCENE_SECONDS),
            "-i", str(FRAMES / f"card-{page}.png"),
        ]
    inputs += ["-stream_loop", "-1", "-i", str(AUDIO)]

    filters: list[str] = []
    directions = ["push", "rise", "pull", "pan", "pan", "push", "pull"]
    for i, direction in enumerate(directions):
        ease = f"(1-cos(on/{SCENE_FRAMES - 1}*PI))/2"
        zoom = f"1+0.05*{ease}" if direction in ("push", "rise", "pan") else f"1.05-0.05*{ease}"
        if direction == "rise":
            x_expr, y_expr = "(iw-iw/zoom)*0.5", f"(ih-ih/zoom)*(0.32+0.30*{ease})"
        elif direction == "pan":
            x_expr, y_expr = f"(iw-iw/zoom)*(0.42+0.16*{ease})", f"(ih-ih/zoom)*(0.32+0.28*{ease})"
        else:
            x_expr, y_expr = "(iw-iw/zoom)*0.5", "(ih-ih/zoom)*0.5"
        filters.append(
            f"[{i}:v]scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=increase,"
            f"crop={WIDTH}:{HEIGHT},"
            f"zoompan=z='{zoom}':x='{x_expr}':y='{y_expr}':d=1:"
            f"s={WIDTH}x{HEIGHT}:fps={FPS},setsar=1,"
            f"trim=duration={SCENE_SECONDS},setpts=PTS-STARTPTS,format=yuv420p[v{i}]"
        )

    current = "v0"
    for i in range(1, PAGE_COUNT):
        target = f"mix{i}"
        offset = (SCENE_SECONDS - TRANSITION_SECONDS) * i
        filters.append(
            f"[{current}][v{i}]xfade=transition=fade:duration={TRANSITION_SECONDS}:"
            f"offset={offset:.3f}[{target}]"
        )
        current = target

    audio_index = PAGE_COUNT
    fade_out_start = TOTAL_SECONDS - 1.4
    filters.append(
        f"[{audio_index}:a]atrim=duration={TOTAL_SECONDS:.3f},asetpts=PTS-STARTPTS,"
        f"afade=t=in:st=0:d=1.2,afade=t=out:st={fade_out_start:.3f}:d=1.4,"
        f"volume=0.84[aout]"
    )
    args = inputs + [
        "-filter_complex", ";".join(filters),
        "-map", f"[{current}]", "-map", "[aout]",
        "-t", f"{TOTAL_SECONDS:.3f}",
        "-r", str(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "18",
        "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
        "-movflags", "+faststart", "-metadata", "title=Shalin & Isha | Wedding Invitation",
        str(OUTPUT),
    ]
    run(args)
    print(f"Rendered {OUTPUT}")
    print(f"Duration: {TOTAL_SECONDS:.1f}s | {WIDTH}x{HEIGHT} | {FPS} fps | {PAGE_COUNT} invitation cards")


if __name__ == "__main__":
    main()
