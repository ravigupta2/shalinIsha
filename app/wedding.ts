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

const celebrations = {
  carnival: {
    event: "Day 1 · Carnival",
    start: "2027-01-26T13:00:00+05:30",
    time: "1:00 pm",
    title: "Pastel Paradise",
    subtitle: "A Carnival of Colours",
    dressCode: "Pastel Dreamscape",
    description: "Blush, powder blue, lilac, mint, butter yellow and peach. Think dreamy pastels, playful silhouettes and effortless festive glamour.",
    palette: [
      ["Blush", "#dfaeb5"], ["Powder blue", "#aabfd8"], ["Lilac", "#c2aed5"],
      ["Mint", "#a4c6b3"], ["Butter yellow", "#ead28c"], ["Peach", "#e8af94"],
    ],
    outfits: [
      { tag: "Women", name: "Blush floral lehenga",
        description: "Wear a blush floral lehenga with a light dupatta and delicate earrings. Flat juttis make it easy to move between carnival stalls." },
      { tag: "Men", name: "Mint kurta & floral Nehru jacket",
        description: "Layer a powder-blue floral Nehru jacket over a mint kurta. Finish with pale trousers and soft leather juttis." },
    ],
    theme: "pastel",
  },
  sangeet: {
    event: "Day 1 · Sangeet",
    start: "2027-01-26T19:30:00+05:30",
    time: "7:30 pm onwards",
    title: "Midnight Masquerade",
    subtitle: "An Affair of Glitz & Glam",
    dressCode: "Glitter After Dark",
    description: "Black, wine, emerald, midnight blue, metallics and sequins. Bring on the shimmer, sparkle and statement looks.",
    palette: [
      ["Black", "#26232a"], ["Wine", "#732e4e"], ["Emerald", "#215b4d"],
      ["Midnight blue", "#273351"], ["Gold metallic", "#b59259"], ["Silver metallic", "#b7b3bd"],
    ],
    outfits: [
      { tag: "Women", name: "Emerald sequin saree",
        description: "An emerald sequin saree catches the light on the dance floor. Pin the pallu at the shoulder and pair it with statement earrings." },
      { tag: "Men", name: "Midnight velvet bandhgala",
        description: "Wear a midnight-blue velvet bandhgala with dark tailored trousers. A metallic brooch adds a glint under the stage lights." },
    ],
    theme: "midnight",
  },
  wedding: {
    event: "Day 2 · Wedding",
    start: "2027-01-27T11:00:00+05:30",
    time: "11:00 am",
    title: "The Royal Vows",
    subtitle: "A Timeless Indian Celebration",
    dressCode: "Ethnic Elegance",
    description: "Traditional Indian attire, rich craftsmanship, sarees, lehengas, sherwanis and timeless ethnic ensembles.",
    palette: [],
    outfits: [
      { tag: "Women", name: "Garnet Banarasi saree",
        description: "Let the gold motifs of a garnet Banarasi silk saree take centre stage. Gold jhumkas and a stack of bangles complement the weave." },
      { tag: "Men", name: "Brocade sherwani",
        description: "Pair an ivory brocade sherwani with a maroon stole draped over one shoulder. Embroidered mojaris pick up the detailing at the collar." },
    ],
    theme: "royal",
  },
  gala: {
    event: "Day 2 · Gala Dinner",
    start: "2027-01-27T19:30:00+05:30",
    time: "7:30 pm",
    title: "An Evening to Remember",
    subtitle: "",
    dressCode: "Black Tie Affair",
    description: "Elegant gowns, tuxedos, sophisticated suits and elevated evening wear. Think understated luxury.",
    palette: [],
    outfits: [
      { tag: "Women", name: "Champagne satin gown",
        description: "A floor-length champagne satin gown needs little embellishment. Carry a small evening clutch and add a pair of drop earrings." },
      { tag: "Men", name: "Black dinner tuxedo",
        description: "A black tuxedo, crisp white dress shirt and black bow tie make a classic dinner look. Finish with polished black shoes." },
    ],
    theme: "gala",
  },
};

export const wardrobe = Object.values(celebrations);

type WeddingEvent = {
  time: string;
  start: string;
  title: string;
  ceremony?: string;
  note?: string;
};

function scheduledCelebration(
  celebration: (typeof wardrobe)[number],
  ceremony: string,
  note?: string,
): WeddingEvent {
  const { start, time, title } = celebration;
  return { start, time, title, ceremony, note };
}

export const weddingDays: { date: string; day: string; events: WeddingEvent[] }[] = [
  {
    date: "2027-01-26",
    day: "Tuesday, 26 January",
    events: [
      { start: celebrationStarts, time: "10:00 am onwards", title: "Ganesh Pujan & Kalash" },
      scheduledCelebration(celebrations.carnival, "Carnival"),
      scheduledCelebration(celebrations.sangeet, "Sangeet"),
    ],
  },
  {
    date: "2027-01-27",
    day: "Wednesday, 27 January",
    events: [
      { start: "2027-01-27T09:00:00+05:30", time: "9:00 am", title: "Baraat" },
      scheduledCelebration(celebrations.wedding, "Varmala & Pheras"),
      scheduledCelebration(celebrations.gala, "Gala Dinner", "An evening to raise a toast to new beginnings."),
    ],
  },
];
