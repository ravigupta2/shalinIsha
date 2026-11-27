import Script from "next/script";
import { celebrationStarts, palace, reception, wardrobe, weddingDays } from "./wedding";

const assets = "/celebration-invites/petal-and-post/assets";

const invitation = {
  theme: "midnight",
  occasion: "wedding",
  studio: false,
  reception,
  weddingDays,
  photo: "/images/shalin-isha-pavilion.webp",
  music: "/audio/our-forever.m4a",
  data: {
    names: "Shalin & Isha",
    date: celebrationStarts.slice(0, 16),
    venues: [
      { label: "Wedding celebrations", name: palace.name, city: palace.city },
    ],
  },
  wedding: {
    story: "Shalin was in London and Isha was in Indore when a work call brought us together. Soon we were calling just to hear each other’s voice. When Shalin returned to India, we finally met in Bharuch. Now our families are coming together, and we’d love you there with us.",
    programmeTitle: "wedding celebrations",
    wardrobe,
  },
};

export default function InvitationPage() {
  return (
    <>
      <link rel="stylesheet" href={assets + "/invitation.css"} />
      <script type="application/json" id="celebration-config"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invitation).replace(/</g, "\\u003c") }} />
      <div id="root" />
      <Script src={assets + "/index-BlIkZzrQ.js"} type="module" />
    </>
  );
}
