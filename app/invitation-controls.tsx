"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { celebrationStarts, wardrobe } from "./wedding";

const sections = [
  { id: "invitation", label: "Invite", icon: "envelope" },
  { id: "date", label: "The date", icon: "calendar" },
  { id: "details", label: "Details", icon: "pin" },
  { id: "wardrobe", label: "Wardrobe", icon: "wardrobe" },
] as const;

type SectionId = (typeof sections)[number]["id"];
type IconName = (typeof sections)[number]["icon"] | "music" | "pause" | "scroll";

const iconPaths: Record<IconName, string> = {
  envelope: "M3 6h18v12H3z M3 7l9 6 9-6",
  calendar: "M4 6h16v15H4z M8 3v6m8-6v6M4 11h16m-12 4h1m3 0h1m3 0h1m-9 3h1m3 0h1",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z M14 10a2 2 0 1 1-4 0 2 2 0 1 1 4 0Z",
  wardrobe: "m8 4-5 3 2 5 3-1v9h8v-9l3 1 2-5-5-3a4 4 0 0 1-8 0Z",
  music: "M10 17V4l9-2v12 M10 16a3 2.5 0 1 1-6 0 3 2.5 0 0 1 6 0Zm9-2a3 2.5 0 1 1-6 0 3 2.5 0 0 1 6 0Z",
  pause: "M9 5v14m6-14v14",
  scroll: "M12 4v15m-5-5 5 5 5-5",
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={iconPaths[name]} />
    </svg>
  );
}

export function InvitationControls() {
  const [activeSection, setActiveSection] = useState<SectionId>("invitation");
  const [autoScroll, setAutoScroll] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const targets = sections.map(({ id }) => ({ id, element: document.getElementById(id) })).reverse();
    let frame = 0;

    function updateSection() {
      frame = 0;
      const readingLine = Math.min(180, window.innerHeight * 0.3);
      const current = targets.find(({ element }) => element && element.getBoundingClientRect().top <= readingLine);
      setActiveSection(current?.id ?? "invitation");
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(updateSection);
    }

    updateSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("has-arrived");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoScroll) return;

    let frame = 0;
    let lastTime: number | undefined;
    let position = window.scrollY;
    function advance(time: number) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      position += lastTime === undefined ? 0 : Math.min(time - lastTime, 50) * 0.047;
      if (position >= maxScroll) {
        window.scrollTo({ top: maxScroll, behavior: "instant" });
        setAutoScroll(false);
        return;
      }
      window.scrollTo({ top: position, behavior: "instant" });
      lastTime = time;
      frame = requestAnimationFrame(advance);
    }

    function stop() {
      setAutoScroll(false);
    }

    function stopOnPointer(event: globalThis.PointerEvent) {
      if (event.target instanceof Element && !event.target.closest(".scroll-button")) stop();
    }

    function stopOnKey(event: globalThis.KeyboardEvent) {
      if (["Escape", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)) stop();
    }

    frame = requestAnimationFrame(advance);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("pointerdown", stopOnPointer, { passive: true });
    window.addEventListener("keydown", stopOnKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("pointerdown", stopOnPointer);
      window.removeEventListener("keydown", stopOnKey);
    };
  }, [autoScroll]);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    setMusicError(false);
    try {
      await audio.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setMusicError(true);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding-music.m4a"
        preload="none"
        loop
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setMusicError(true); }}
      />
      <div className="floating-controls">
        {musicError && <p className="music-message" role="status">Music is unavailable. Tap to try again.</p>}
        <nav className="section-nav" aria-label="Invitation sections">
          {sections.map(({ id, label, icon }) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              <Icon name={icon} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="music-button"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
          title={playing ? "Pause music" : "Play music"}
        >
          <Icon name={playing ? "pause" : "music"} />
          <span className="music-label">{playing ? "Pause" : "Music"}</span>
        </button>
        <button
          type="button"
          className="scroll-button"
          onClick={() => setAutoScroll((current) => !current)}
          aria-label={autoScroll ? "Stop guided scroll" : "Start guided scroll"}
          title={autoScroll ? "Stop guided scroll" : "Start guided scroll"}
        >
          <Icon name={autoScroll ? "pause" : "scroll"} />
          <span>{autoScroll ? "Stop" : "Scroll"}</span>
        </button>
      </div>
    </>
  );
}

export function Countdown() {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    const startsAt = Date.parse(celebrationStarts);
    function update() {
      const remaining = Math.max(0, Math.ceil((startsAt - Date.now()) / 1000));
      setSeconds(remaining);
      if (remaining === 0) window.clearInterval(timer);
    }

    const timer = window.setInterval(update, 1000);
    update();
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: seconds === null ? null : Math.floor(seconds / 86400) },
    { label: "Hours", value: seconds === null ? null : Math.floor(seconds / 3600) % 24 },
    { label: "Minutes", value: seconds === null ? null : Math.floor(seconds / 60) % 60 },
    { label: "Seconds", value: seconds === null ? null : seconds % 60 },
  ];

  return (
    <div className="countdown" role="timer" aria-label="Time until the wedding celebrations begin">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-unit">
          <span>{value === null ? "–" : String(value).padStart(2, "0")}</span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

const scratchWidth = 480;
const scratchHeight = 134;
const scratchRadius = 25;

export function DateReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef<number | null>(null);
  const startPoint = useRef<{ x: number; y: number } | null>(null);
  const marks = useRef(new Set<number>());
  const [scratching, setScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) return;

    const foil = context.createLinearGradient(0, scratchHeight, scratchWidth, 0);
    foil.addColorStop(0, "#9c6b39");
    foil.addColorStop(0.4, "#e9cb8e");
    foil.addColorStop(0.65, "#b88950");
    foil.addColorStop(1, "#e8c88d");
    context.fillStyle = foil;
    context.fillRect(0, 0, scratchWidth, scratchHeight);

    context.strokeStyle = "#fff5d13a";
    for (let offset = -scratchHeight; offset < scratchWidth; offset += 4) {
      context.beginPath();
      context.moveTo(offset, 0);
      context.lineTo(offset + scratchHeight, scratchHeight);
      context.stroke();
    }
  }, []);

  function scratch(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = event.currentTarget;
    const context = canvas.getContext("2d");
    if (!context) return;

    const bounds = canvas.getBoundingClientRect();
    const x = (event.clientX - bounds.left) * scratchWidth / bounds.width;
    const y = (event.clientY - bounds.top) * scratchHeight / bounds.height;
    const previous = startPoint.current ?? { x, y };

    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "#000";
    context.lineWidth = scratchRadius * 2;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(previous.x, previous.y);
    context.lineTo(x + 0.01, y);
    context.stroke();

    // Track coverage in cells so passing repeatedly over the same spot counts once.
    const travel = Math.max(1, Math.ceil(Math.hypot(x - previous.x, y - previous.y) / 12));
    for (let index = 0; index <= travel; index++) {
      const column = Math.floor((previous.x + (x - previous.x) * index / travel) / 40);
      const row = Math.floor((previous.y + (y - previous.y) * index / travel) / 34);
      if (column >= 0 && column < 12 && row >= 0 && row < 4) marks.current.add(row * 12 + column);
    }
    startPoint.current = { x, y };
    if (marks.current.size >= 13) setRevealed(true);
  }

  function beginScratch(event: PointerEvent<HTMLCanvasElement>) {
    if (revealed || pointer.current !== null || event.button !== 0) return;
    pointer.current = event.pointerId;
    setScratching(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    scratch(event);
  }

  function endScratch(event: PointerEvent<HTMLCanvasElement>) {
    if (pointer.current !== event.pointerId) return;
    pointer.current = null;
    startPoint.current = null;
  }

  return (
    <div className="date-ticket" data-reveal>
      <p className="eyebrow">Shalin &amp; Isha</p>
      <div className="scratch-area" data-scratching={scratching} data-revealed={revealed}>
        <p className="scratch-date" aria-hidden={!revealed}>26–27 <i>January</i><span>2027</span></p>
        <canvas
          ref={canvasRef}
          width={scratchWidth}
          height={scratchHeight}
          aria-hidden="true"
          onPointerDown={beginScratch}
          onPointerMove={(event) => { if (!revealed && pointer.current === event.pointerId) scratch(event); }}
          onPointerUp={endScratch}
          onPointerCancel={endScratch}
          onLostPointerCapture={endScratch}
        />
        <span className="scratch-instruction" aria-hidden="true">Scratch to reveal</span>
      </div>
      <button type="button" className="reveal-button" onClick={() => setRevealed(true)} aria-disabled={revealed}>
        {revealed ? "Date revealed" : "Tap to reveal"}
      </button>
      <a className="calendar-link" href="/shalin-isha-wedding.ics" download>Add to calendar</a>
      <span className="sr-only" role="status">{revealed ? "Wedding dates revealed: 26 and 27 January 2027." : ""}</span>
    </div>
  );
}

const looks: Record<string, readonly string[]> = {
  pastel: ["Pastel lehenga", "Soft-toned kurta", "Light festive separates"],
  midnight: ["Sequined saree", "Velvet bandhgala", "Metallic eveningwear"],
  royal: ["Traditional saree", "Embroidered lehenga", "Classic sherwani"],
  gala: ["Evening gown", "Tuxedo", "Tailored suit"],
};

const storageKey = "shalin-isha-wardrobe";

export function WardrobePlanner() {
  const [selected, setSelected] = useState(0);
  const [saved, setSaved] = useState<Record<string, string>>({});
  const [choices, setChoices] = useState<Record<string, string>>({});
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const event = wardrobe[selected];
  const options = looks[event.theme];
  const chosen = choices[event.theme] ?? saved[event.theme] ?? options[0];
  const isSaved = saved[event.theme] === chosen;

  useEffect(() => {
    try {
      const value = JSON.parse(window.localStorage.getItem(storageKey) ?? "{}");
      if (!value || typeof value !== "object") return;
      setSaved(Object.fromEntries(Object.entries(looks).flatMap(([theme, options]) =>
        options.includes(value[theme]) ? [[theme, value[theme]]] : []
      )));
    } catch {
      // Ignore invalid or unavailable local storage.
    }
  }, []);

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = wardrobe.length - 1;
    let next = index;
    switch (event.key) {
      case "ArrowLeft": next = index === 0 ? last : index - 1; break;
      case "ArrowRight": next = index === last ? 0 : index + 1; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  function saveLook() {
    const updated = { ...saved };
    if (isSaved) delete updated[event.theme];
    else updated[event.theme] = chosen;
    setSaved(updated);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // The selection stays available for the current visit.
    }
  }

  return (
    <div className="wardrobe-planner" data-reveal>
      <div className="wardrobe-tabs" role="tablist" aria-label="Wedding wardrobe events">
        {wardrobe.map(({ event, theme }, index) => (
          <button
            key={theme}
            id={`wardrobe-tab-${theme}`}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            tabIndex={index === selected ? 0 : -1}
            aria-selected={index === selected}
            aria-controls={`wardrobe-panel-${theme}`}
            onKeyDown={(event) => onTabKey(event, index)}
            onClick={() => setSelected(index)}
          >{event}</button>
        ))}
      </div>

      {wardrobe.map(({ event: label, theme, title, subtitle, dressCode, description, palette }, index) => (
        <article
          key={theme}
          id={`wardrobe-panel-${theme}`}
          className={`wardrobe-card theme-${theme}`}
          role="tabpanel"
          aria-labelledby={`wardrobe-tab-${theme}`}
          tabIndex={0}
          hidden={selected !== index}
        >
          <div className="wardrobe-title">
            <div className="wardrobe-arch">
              <div className="ornament" aria-hidden="true"><span>✦</span></div>
              <p className="eyebrow">{label}</p>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="wardrobe-copy">
            <p className="eyebrow">Dress code</p>
            <h4>{dressCode}</h4>
            <p>{description}</p>
            {palette.length > 0 && (
              <ul className="swatches" aria-label="Suggested colours">
                {palette.map(([color, hex]) => <li key={color}><span style={{ background: hex }} />{color}</li>)}
              </ul>
            )}
            {selected === index && (
              <fieldset className="looks">
                <legend>Outfit ideas</legend>
                <div className="look-options">
                  {options.map((look) => (
                    <label key={look}>
                      <input
                        type="radio"
                        name={`outfit-${theme}`}
                        value={look}
                        checked={chosen === look}
                        onChange={() => setChoices((current) => ({ ...current, [theme]: look }))}
                      />
                      <span>{look}</span>
                    </label>
                  ))}
                </div>
                <button type="button" className="save-look" aria-pressed={isSaved} onClick={saveLook}>
                  {isSaved ? "Look saved" : "Save this look"}
                </button>
              </fieldset>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
