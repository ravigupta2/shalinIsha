import { r as React } from "./index-BlIkZzrQ.js";

function h(...args) { return React.createElement(...args); }
const wardrobeImages = "/celebration-invites/petal-and-post/assets/wardrobe/";
const storageKey = "petal-post-wardrobe";
const previousLooks = {
  "The garden romantic": "women",
  "The evening muse": "women",
  "The modern classic": "men",
  "Tuxedo": "men",
  "Evening gown": "women",
};

function readPlanner() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const planner = saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    return {
      "Day 2 · Gala Dinner": localStorage.getItem("shalin-isha-gala-outfit"),
      ...planner,
    };
  } catch {
    return {};
  }
}

function useRailScroll(rail, count, event) {
  const [scrollIndex, setScrollIndex] = React.useState();
  React.useEffect(() => {
    const container = rail.current;
    const stage = container.firstElementChild;
    const mobile = matchMedia("(max-width: 600px)");
    let frame;
    function measure() {
      frame = 0;
      const travel = container.clientHeight - stage.clientHeight;
      if (!mobile.matches || travel <= 0) {
        setScrollIndex(undefined);
        return;
      }
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const progress = (top - container.getBoundingClientRect().top) / travel;
      setScrollIndex(Math.max(0, Math.min(count - 1, Math.floor(progress * count))));
    }
    function queueMeasure() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    measure();
    const observer = new ResizeObserver(queueMeasure);
    observer.observe(stage);
    observer.observe(container);
    window.addEventListener("scroll", queueMeasure, { passive: true });
    mobile.addEventListener("change", queueMeasure);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queueMeasure);
      mobile.removeEventListener("change", queueMeasure);
      cancelAnimationFrame(frame);
    };
  }, [rail, count, event]);
  return scrollIndex;
}

export function WeddingLooks({ events, Rail }) {
  const [selected, setSelected] = React.useState(0);
  const [saved, setSaved] = React.useState(readPlanner);
  const event = events[selected];
  const rail = React.useRef(null);
  const outfits = React.useMemo(() => event.outfits.map(({ tag, name, description }) => ({
    id: tag.toLowerCase(),
    tag,
    name,
    description,
    image: wardrobeImages + event.theme + "-" + tag.toLowerCase() + ".webp",
  })), [event]);
  const scrollIndex = useRailScroll(rail, outfits.length, event);
  const savedId = previousLooks[saved[event.event]] ?? saved[event.event];

  function toggle(outfit) {
    const next = { ...saved, ...readPlanner(), [event.event]: savedId === outfit.id ? null : outfit.id };
    setSaved(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* Keep this visit's choice. */ }
  }

  function moveTab(keyEvent, index) {
    let target;
    switch (keyEvent.key) {
      case "ArrowRight": target = (index + 1) % events.length; break;
      case "ArrowLeft": target = (index + events.length - 1) % events.length; break;
      case "Home": target = 0; break;
      case "End": target = events.length - 1; break;
      default: return;
    }
    keyEvent.preventDefault();
    setSelected(target);
    document.getElementById("outfit-tab-" + target).focus();
  }

  return h(React.Fragment, null,
    h("div", { className: "wardrobe-tabs", role: "tablist", "aria-label": "Wedding Edit events" },
      events.map((item, index) => h("button", {
        key: item.theme, id: "outfit-tab-" + index, type: "button", role: "tab",
        "aria-controls": "outfit-panel", "aria-selected": selected === index,
        tabIndex: selected === index ? 0 : -1, onClick: () => setSelected(index),
        onKeyDown: (keyEvent) => moveTab(keyEvent, index),
      }, h("span", null, item.event), h("strong", null, item.title),
      h("small", null, item.time, saved[item.event] ? " · Look saved" : "")))
    ),
    h("div", { id: "outfit-panel", role: "tabpanel", "aria-labelledby": "outfit-tab-" + selected, tabIndex: 0 },
      h("div", { className: "edit-heading" },
        h("p", { className: "tiny-label" }, event.event),
        h("h3", null, event.title),
        event.subtitle && h("p", { className: "edit-subtitle" }, event.subtitle),
        h("h4", null, h("span", null, "Dress code"), event.dressCode),
        h("p", { className: "wardrobe-note" }, event.description)
      ),
      event.palette.length > 0 && h("ul", { className: "edit-palette", "aria-label": "Dress code colours" },
        event.palette.map(([name, hex]) => h("li", { key: name },
          h("i", { style: { backgroundColor: hex }, "aria-hidden": true }), name))
      ),
      h("div", { className: "wardrobe-scroll", ref: rail },
        h("div", { className: "wardrobe-scroll-stage" },
          h(Rail, { key: event.theme, items: outfits, scrollIndex, restingIndex: 0, autoplay: false, hanger: "matte",
            caption: "Select a look to explore it. Select again for details.", className: "wardrobe-rail" })
        )
      ),
      h("div", { className: "edit-look-notes" }, outfits.map(outfit =>
        h("article", { key: outfit.id },
          h("p", { className: "tiny-label" }, "For " + outfit.tag.toLowerCase()),
          h("h4", null, outfit.name), h("p", null, outfit.description),
          h("button", { className: "primary-button", type: "button", "aria-pressed": savedId === outfit.id,
            "aria-label": (savedId === outfit.id ? "Unsave " : "Save ") + outfit.name, onClick: () => toggle(outfit) },
            savedId === outfit.id ? "Look saved" : "Save this look")
        )
      ))
    )
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
          h("div", null, event.ceremony && h("p", {className: "itinerary-ceremony"}, event.ceremony), h("h4", null, event.title), event.note && h("p", null, event.note))
        )
      ))
    )
  ));
}
