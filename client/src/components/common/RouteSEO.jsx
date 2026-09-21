import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://hurugarden.onrender.com";

const routeMeta = {
  "/": {
    title: "Huru Garden | Host Better, Dine Happier in Kakuma, Kenya",
    description:
      "Kakuma's premier community hospitality and recreation hub. Authentic nyama choma, modern meeting halls, private workstations, and family-friendly play zones.",
  },
  "/cafeteria": {
    title: "Cafeteria & Dining | Nyama Choma & Refreshments - Huru Garden",
    description:
      "Explore the Huru Garden cafeteria menu. Succulent nyama choma, kuku, cold drinks, fresh juices, and spirits served directly to your table, hall, or office.",
  },
  "/services": {
    title:
      "Services & Facilities | Meeting Hall, Offices & Workstations - Huru Garden",
    description:
      "Book professional meeting halls for up to 100 people, private office rentals, full board event catering, and freelance workstations with high-speed internet in Kakuma.",
  },
  "/events": {
    title: "Plan Your Event & Book Space | Huru Garden Kakuma",
    description:
      "Reserve your private gathering, birthday, team workshop, or conference at Huru Garden. On-site catering, event coordination, and versatile indoor/outdoor venues.",
  },
  "/play": {
    title: "Play Garden & Kids Outdoor Activities | Huru Garden Kakuma",
    description:
      "Safe, supervised recreation in Kakuma: inflatable bouncing castles, high-flying trampolines, water and dry slides, swimming pools, and sports for children.",
  },
  "/about": {
    title: "Our Story & Social Mission | Huru Garden Kakuma",
    description:
      "Learn how Huru Garden combines hospitality, play-based learning, and community impact to create lasting opportunities in Kakuma, Kenya.",
  },
  "/contact": {
    title: "Contact Us & Location Map | Huru Garden Kakuma",
    description:
      "Find Huru Garden in Kakuma 3 Zone 2 Block 8 (Burundi Market). View opening hours, get in touch, or send a direct inquiry to our team.",
  },
};

function updateMetaTag(selector, attribute, value) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const [attrName, attrVal] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=");
    element.setAttribute(attrName, attrVal.replace(/['"]/g, ""));
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function updateCanonical(url) {
  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

export default function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] || routeMeta["/"];
    const currentUrl = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    // Update document title
    document.title = meta.title;

    // Update primary meta description
    updateMetaTag("meta[name='description']", "content", meta.description);

    // Update Open Graph
    updateMetaTag("meta[property='og:title']", "content", meta.title);
    updateMetaTag(
      "meta[property='og:description']",
      "content",
      meta.description,
    );
    updateMetaTag("meta[property='og:url']", "content", currentUrl);

    // Update Twitter Card
    updateMetaTag("meta[name='twitter:title']", "content", meta.title);
    updateMetaTag(
      "meta[name='twitter:description']",
      "content",
      meta.description,
    );
    updateMetaTag("meta[name='twitter:url']", "content", currentUrl);

    // Update Canonical URL
    updateCanonical(currentUrl);
  }, [pathname]);

  return null;
}
