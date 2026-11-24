export const celebrationStarts = "2027-01-26T10:00:00+05:30";

export const palace = {
  name: "Kesar Bagh Palace",
  city: "Chittorgarh, Rajasthan",
  address: "Village Barada, near Kendriya Vidyalaya",
  postcode: "312001",
  map: "https://www.google.com/maps/search/?api=1&query=Kesar+Bagh+Palace+Chittorgarh+Rajasthan",
  phone: "+918690142444",
};

export const reception = {
  date: "2027-01-31",
  time: "2027-01-31T19:30:00+05:30",
  venue: "Adrenium (Suvik)",
  city: "Bharuch, Gujarat",
  map: "https://www.google.com/maps/search/?api=1&query=Adrenium+Suvik+Bharuch+Gujarat",
};

type WeddingEvent = {
  time: string;
  start: string;
  title: string;
  note?: string;
};

export const weddingDays: { date: string; day: string; events: WeddingEvent[] }[] = [
  {
    date: "2027-01-26",
    day: "Tuesday, 26 January",
    events: [
      { start: celebrationStarts, time: "10:00 am onwards", title: "Ganesh Pujan & Kalash" },
      { start: "2027-01-26T13:00:00+05:30", time: "1:00 pm", title: "Carnival" },
      { start: "2027-01-26T19:30:00+05:30", time: "7:30 pm onwards", title: "Sangeet" },
    ],
  },
  {
    date: "2027-01-27",
    day: "Wednesday, 27 January",
    events: [
      { start: "2027-01-27T09:00:00+05:30", time: "9:00 am", title: "Baraat" },
      { start: "2027-01-27T11:00:00+05:30", time: "11:00 am", title: "Varmala & Pheras" },
      {
        start: "2027-01-27T19:30:00+05:30",
        time: "7:30 pm",
        title: "Gala Dinner",
        note: "An evening to raise a toast to new beginnings.",
      },
    ],
  },
];

export const wardrobe = [
  {
    event: "Day 1 · Carnival",
    title: "Pastel Paradise",
    subtitle: "A Carnival of Colours",
    dressCode: "Pastel Dreamscape",
    description: "Blush, powder blue, lilac, mint, butter yellow and peach. Think dreamy pastels, playful silhouettes and effortless festive glamour.",
    palette: [
      ["Blush", "#dfaeb5"], ["Powder blue", "#aabfd8"], ["Lilac", "#c2aed5"],
      ["Mint", "#a4c6b3"], ["Butter yellow", "#ead28c"], ["Peach", "#e8af94"],
    ],
    theme: "pastel",
  },
  {
    event: "Day 1 · Sangeet",
    title: "Midnight Masquerade",
    subtitle: "An Affair of Glitz & Glam",
    dressCode: "Glitter After Dark",
    description: "Black, wine, emerald, midnight blue, metallics and sequins. Bring on the shimmer, sparkle and statement looks.",
    palette: [
      ["Black", "#26232a"], ["Wine", "#732e4e"], ["Emerald", "#215b4d"],
      ["Midnight blue", "#273351"], ["Gold metallic", "#b59259"], ["Silver metallic", "#b7b3bd"],
    ],
    theme: "midnight",
  },
  {
    event: "Day 2 · Wedding",
    title: "The Royal Vows",
    subtitle: "A Timeless Indian Celebration",
    dressCode: "Ethnic Elegance",
    description: "Traditional Indian attire, rich craftsmanship, sarees, lehengas, sherwanis and timeless ethnic ensembles.",
    palette: [],
    theme: "royal",
  },
  {
    event: "Day 2 · Gala Dinner",
    title: "The Grand Finale",
    subtitle: "An Evening to Remember",
    dressCode: "Black Tie Affair",
    description: "Elegant gowns, tuxedos, sophisticated suits and elevated evening wear. Think understated luxury.",
    palette: [],
    theme: "gala",
  },
];
