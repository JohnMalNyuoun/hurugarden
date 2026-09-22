import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();

function loadMetaPixel() {
  if (!pixelId) return false;
  if (window.__huruMetaPixelLoaded) return true;

  window.fbq = window.fbq || function (...args) {
    window.fbq.queue.push(args);
  };
  window.fbq.queue = window.fbq.queue || [];
  window.fbq.loaded = true;
  window.fbq.version = "2.0";

  const script = document.createElement("script");
  script.id = "meta-pixel-script";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", pixelId);
  window.__huruMetaPixelLoaded = true;
  return true;
}

export default function MetaPixel() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const trackPageView = () => {
      if (localStorage.getItem("huru_cookie_consent") !== "accepted") return;
      if (!loadMetaPixel()) return;

      const pageKey = `${pathname}${search}`;
      if (window.__huruMetaPixelLastPage === pageKey) return;

      window.fbq("track", "PageView");
      window.__huruMetaPixelLastPage = pageKey;
    };

    trackPageView();
    window.addEventListener("huru:analytics-consent-granted", trackPageView);

    return () => {
      window.removeEventListener("huru:analytics-consent-granted", trackPageView);
    };
  }, [pathname, search]);

  return null;
}
