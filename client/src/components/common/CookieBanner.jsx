import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already set a cookie preference
    const consent = localStorage.getItem("huru_cookie_consent");
    if (!consent) {
      // Show immediately on first visit
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("huru_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("huru_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-card">
        <div className="cookie-banner-header">
          <div className="cookie-title">
            <Cookie size={20} className="cookie-icon" />
            <span>We value your privacy</span>
          </div>
          <button 
            className="cookie-close-btn" 
            onClick={handleDecline} 
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>

        <p className="cookie-banner-text">
          We use essential and analytics cookies on <strong>Huru Garden</strong> to enhance your navigation, analyze traffic, and manage reservations. Learn more in our{" "}
          <Link to="/cookie-policy">Cookie Policy</Link> and{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-decline" onClick={handleDecline}>
            Decline Optional
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}