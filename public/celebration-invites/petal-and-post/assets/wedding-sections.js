import { r as React } from "./index-BlIkZzrQ.js";

function h(...args) { return React.createElement(...args); }
const wardrobeImages = "/celebration-invites/petal-and-post/assets/wardrobe/";
const outfits = [
  { id: "tuxedo", name: "Tuxedo", tag: "Men · Gala Dinner", image: wardrobeImages + "tuxedo.webp",
    description: "A black dinner jacket with satin peak lapels, a white dress shirt and a black bow tie.",
    details: ["Black tie", "Pocket square", "Polished dress shoes"] },
  { id: "gown", name: "Evening gown", tag: "Women · Gala Dinner", image: wardrobeImages + "evening.webp",
    description: "A floor-length rose satin gown with evening jewellery and a small clutch.",
    details: ["Satin finish", "Evening jewellery", "Formal shoes"] },
];

export function GalaLooks({Rail, railRef, scrollIndex}) {
  const storageKey = "shalin-isha-gala-outfit";
  const [saved, setSaved] = React.useState(() => {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  });
  function toggle(name) {
    const next = saved === name ? null : name;
    setSaved(next);
    try {
      if (next) localStorage.setItem(storageKey, next);
      else localStorage.removeItem(storageKey);
    } catch { /* Selections still work within this visit. */ }
  }
  return h(React.Fragment, null,
    h("div", {className: "wardrobe-scroll", ref: railRef},
      h("div", {className: "wardrobe-scroll-stage"},
        h(Rail, {items: outfits, scrollIndex, autoplay: false, hanger: "matte",
          caption: "Touch a hanger to explore a look. Tap again for the details.", className: "wardrobe-rail"})
      )
    ),
    h("div", {className: "outfit-save gala-save"}, outfits.map(({name}) =>
      h("button", {key: name, className: "primary-button", type: "button",
        "aria-pressed": saved === name, onClick: () => toggle(name)},
        saved === name ? name + " saved" : "Save " + name.toLowerCase())
    ))
  );
}

export function Reception({ details }) {
  return h("section", { id: "reception", className: "celebration reception-finale" },
    h("div", { className: "section-intro" },
      h("span", { className: "tiny-label" }, "Bharuch, Gujarat"),
      h("h2", null, "The wedding ", h("span", { className: "script" }, "reception")),
      h("h3", null, details.venue),
      h("p", null, "Sunday, 31 January 2027 · 7:30 pm onwards"),
      h("a", { className: "light-button", href: details.map, target: "_blank", rel: "noreferrer" }, "Open in Google Maps")
    )
  );
}

export function Credits() {
  return h("footer", { className: "ravi-credits" },
    h("p", null, "Designed & Developed with ❤️ by ", h("strong", null, "Ravi Gupta")),
    h("div", null,
      h("a", { href: "https://www.instagram.com/r.a.v.ii2", target: "_blank", rel: "noreferrer" , "aria-label": "Ravi Gupta on Instagram", title: "Ravi Gupta on Instagram" }, h("img", {src: "/celebration-invites/petal-and-post/assets/credits-instagram.svg", alt: "", width: 20, height: 20})),
      h("a", { href: "https://www.linkedin.com/in/raviig/", target: "_blank", rel: "noreferrer" , "aria-label": "Ravi Gupta on LinkedIn", title: "Ravi Gupta on LinkedIn" }, h("img", {src: "/celebration-invites/petal-and-post/assets/credits-linkedin.svg", alt: "", width: 20, height: 20})),
      h("a", { href: "tel:+919537333363" , "aria-label": "Call Ravi Gupta", title: "Call Ravi Gupta" }, h("img", {src: "/celebration-invites/petal-and-post/assets/credits-phone.svg", alt: "", width: 20, height: 20}))
    )
  );
}

export function Schedule({ days }) {
  return h("div", {className:"wedding-itinerary"}, days.map(day =>
    h("article", {key:day.date},
      h("h3", null, h("time", {dateTime:day.date}, day.day)),
      h("ol", null, day.events.map(event =>
        h("li", {key:event.start},
          h("time", {dateTime:event.start}, event.time),
          h("div", null, h("h4", null, event.title), event.note && h("p", null, event.note))
        )
      ))
    )
  ));
}
