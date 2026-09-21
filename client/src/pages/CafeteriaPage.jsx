import React, { useState } from "react";

// Photo Imports
import cafeteriaImg from "../../../assets/762372387_122119643931272215_4697147077892752819_n.jpg";
import eventImg from "../../../assets/huruchill.jpg";
import beerimg from "../../../assets/beer.jpg";
import wineimg from "../../../assets/chips.jpg";
import juiceimg from "../../../assets/freshbeer.jpg";
import sodaimg from "../../../assets/fata.jpg";
import kukuimg from "../../../assets/kuku.jpg";
import jonimg from "../../../assets/jonwalker.jpg";
import jamesImg from "../../../assets/jameswalker.jpg";
import nyamachomaImg from "../../../assets/nyamachoma.jpg";
import mzingImg from "../../../assets/Mzinga.jpg";
import sweetbeefImg from "../../../assets/sweetbeef.jpg";
import chipsImg from "../../../assets/chips.jpg";
import fataImg from "../../../assets/fata.jpg";
import freshbeerImg from "../../../assets/freshie.jpg";
import cokeImg from "../../../assets/coke.jpg";
import colaImg from "../../../assets/cola.jpg";
import sweetfriesImg from "../../../assets/sweetfries.jpg";
import vodkaImg from "../../../assets/vodka.jpg";

// Store link configuration
const STORE_URL = "https://cafeteria-services.myshopeak.com";

const theme = {
  espresso: "#29130c",
  orange: "#f26622",
  yellow: "#f4a261",
  cream: "#fdfbf7",
  sand: "#f5eee6",
  darkBg: "#1e0d08",
};

const menuItemsData = [
  // Kitchen & Grill
  {
    id: "nyama-choma",
    title: "Signature Nyama Choma",
    category: "Kitchen & Grill",
    desc: "Slow-roasted, succulent grilled meat served with kachumbari & warm ugali right at your garden table.",
    price: "Order Online",
    image: nyamachomaImg,
    popular: true,
  },
  {
    id: "kuku-choma",
    title: "Kuku Choma & Wet Fry",
    category: "Kitchen & Grill",
    desc: "Tender local chicken spiced to perfection or tossed in rich tomato gravy, ideal for group lunches.",
    price: "Order Online",
    image: kukuimg,
    popular: true,
  },
  {
    id: "sweet-beef",
    title: "Glazed Sweet Beef",
    category: "Kitchen & Grill",
    desc: "Richly glazed pan-seared beef bites served over aromatic rice or fries to your workspace.",
    price: "Order Online",
    image: sweetbeefImg,
  },
  {
    id: "sweet-fries",
    title: "Crispy Sweet Fries",
    category: "Kitchen & Grill",
    desc: "Golden potato or sweet potato fries spiced with house seasoning for quick mid-day fuel.",
    price: "Order Online",
    image: sweetfriesImg,
  },
  {
    id: "classic-chips",
    title: "House Potato Chips",
    category: "Kitchen & Grill",
    desc: "Fresh cut, golden fried potatoes paired with signature garlic dip for relaxed meetings.",
    price: "Order Online",
    image: chipsImg,
  },

  // Cold Drinks
  {
    id: "fresh-juice",
    title: "Fresh Chilled Juices",
    category: "Cold Refreshments",
    desc: "100% natural cold-pressed seasonal tropical fruits served over ice to your freelance desk.",
    price: "Order Online",
    image: freshbeerImg,
    popular: true,
  },
  {
    id: "cold-sodas",
    title: "Chilled Sodas & Soft Drinks",
    category: "Cold Refreshments",
    desc: "Ice-cold Coca-Cola, Fanta Orange, Sprite & classic sodas brought directly to your table.",
    price: "Order Online",
    image: sodaimg,
  },
  {
    id: "fanta-refresh",
    title: "Fanta Orange Chill",
    category: "Cold Refreshments",
    desc: "Crisp and bubbly citrus refreshment, best enjoyed in the garden or during hall meetings.",
    price: "Order Online",
    image: fataImg,
  },
  {
    id: "coke-zero",
    title: "Classic Coke Original",
    category: "Cold Refreshments",
    desc: "Original taste served ultra-cold with a splash of fresh lemon to refresh your workday.",
    price: "Order Online",
    image: cokeImg,
  },

  // Spirits & Bar
  {
    id: "johnnie-walker",
    title: "Johnnie Walker Black Label",
    category: "Spirits & Drinks",
    desc: "Blended Scotch Whisky served neatly, on the rocks, or with your favourite mixer for hosted guests.",
    price: "Order Online",
    image: jonimg,
    popular: true,
  },
  {
    id: "jameson-whiskey",
    title: "Jameson Irish Whiskey",
    category: "Spirits & Drinks",
    desc: "Triple distilled, remarkably smooth whiskey crafted for easy sipping across all Huru venues.",
    price: "Order Online",
    image: jamesImg,
  },
  {
    id: "premium-vodka",
    title: "Triple Distilled Vodka",
    category: "Spirits & Drinks",
    desc: "Crisp premium vodka ideal for custom cocktails or ice-cold shots served during events.",
    price: "Order Online",
    image: vodkaImg,
  },
  {
    id: "mzinga-special",
    title: "Mzinga Reserve Bottle",
    category: "Spirits & Drinks",
    desc: "Full bottle reserve service for celebrations, private office gatherings, and Huru Garden events.",
    price: "Order Online",
    image: mzingImg,
  },
  {
    id: "chilled-beer",
    title: "Ice Cold Draught & Lager",
    category: "Spirits & Drinks",
    desc: "Selection of cold local and international beers served frost-chilled directly to your group.",
    price: "Order Online",
    image: beerimg,
  },
];

const menuCategories = [
  "All Menu",
  "Kitchen & Grill",
  "Cold Refreshments",
  "Spirits & Drinks",
  "Gatherings & Platters",
];

export default function CafeteriaPage() {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItemsData.filter((item) => {
    const matchesCategory =
      activeCategory === "All Menu" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: theme.cream, minHeight: "100vh", overflowX: "hidden", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Dynamic CSS styles */}
      <style>{`
        .hero-section {
          padding: 6rem 1.5rem 4rem;
        }
        .intro-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .food-grid {
          grid-template-columns: 1fr !important;
        }
        .banner-grid {
          grid-template-columns: 1fr !important;
        }
        .menu-tab {
          transition: all 0.25s ease;
        }
        .menu-tab:hover {
          color: ${theme.orange} !important;
        }
        .food-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .food-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(41, 19, 12, 0.12) !important;
        }
        .cta-btn-purchase {
          background: ${theme.orange};
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 4px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 14px rgba(242, 102, 34, 0.35);
        }
        .cta-btn-purchase:hover {
          background: #d85213;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(242, 102, 34, 0.45);
        }
        
        @media (min-width: 768px) {
          .hero-section {
            padding: 8rem 10vw 6rem;
          }
          .intro-grid {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr) !important;
            gap: 5rem !important;
          }
          .food-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .banner-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      {/* Top Quick Order Announcement Bar */}
      <div
        style={{
          background: theme.espresso,
          color: "#fff",
          padding: "0.6rem 1rem",
          fontSize: "0.85rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "0.03em",
        }}
      >
        <span>Ordering within Huru? Food & drinks served directly to your table, office, or hall!</span>
        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.yellow,
            fontWeight: 700,
            marginLeft: "0.5rem",
            textDecoration: "underline",
          }}
        >
          Order Online Now 
        </a>
      </div>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          color: "#fff",
          backgroundImage: `linear-gradient(180deg, rgba(41, 19, 12, 0.55) 0%, rgba(41, 19, 12, 0.92) 100%), url(${cafeteriaImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "750px", width: "100%", zIndex: 2 }}>
          <p
            style={{
              color: theme.yellow,
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: "0 0 1rem",
            }}
          >
            Cafeteria & Garden Dining
          </p>
          <h1
            style={{
              font: "400 clamp(2.8rem, 7.5vw, 6.5rem)/0.95 Georgia, serif",
              margin: "0 0 1.5rem",
              wordBreak: "break-word",
            }}
          >
            Eat well,
            <br />
            <i style={{ color: theme.yellow, fontStyle: "italic" }}>stay longer.</i>
          </h1>
          <p
            style={{
              maxWidth: "540px",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#f8f5ef",
              margin: "0 0 2rem",
            }}
          >
            Order directly to your table in Huru Garden, Huru Garden Hall, your private office within Huru, 
            or your freelance workspace. We serve your guests with the best food and drinks, and let Huru manage your event seamlessly.
          </p>

          {/* Primary Call To Action */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-purchase"
            >
              Purchase Your Freedom
            </a>
            <a
              href="#interactive-menu"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "0.9rem 1.6rem",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Explore Menu Below
            </a>
          </div>
        </div>
      </section>

      {/* Intro Heading Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div
          className="intro-grid"
          style={{
            display: "grid",
            alignItems: "end",
            marginBottom: "2rem",
          }}
        >
          <div>
            <p
              style={{
                color: theme.orange,
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 0.8rem",
              }}
            >
              A table for every kind of day
            </p>
            <h2
              style={{
                color: theme.espresso,
                font: "400 clamp(2.2rem, 5vw, 4.5rem)/0.95 Georgia, serif",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              Good food belongs
              <br />
              <i style={{ color: theme.orange }}>in the middle of it.</i>
            </h2>
          </div>
          <p style={{ color: "#655b56", lineHeight: 1.8, margin: 0, fontSize: "1.05rem" }}>
            Whether you are working at a freelance table, hosting in your private office, or gathering guests in Huru Garden Hall, 
            our team serves hot meals, cold drinks, and nyama choma straight to your spot within Huru. Let Huru manage your complete event catering.
          </p>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section id="interactive-menu" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 5rem" }}>
        
        {/* Search & Category Filter Controls */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid rgba(41, 19, 12, 0.12)",
            }}
          >
            {/* Category Tabs */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? theme.espresso : "transparent",
                    color: activeCategory === cat ? "#ffffff" : theme.espresso,
                    border: `1px solid ${activeCategory === cat ? theme.espresso : "rgba(41,19,12,0.2)"}`,
                    padding: "0.6rem 1.2rem",
                    borderRadius: "30px",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Real-time Search Box */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <input
                type="text"
                placeholder="Search food, drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.65rem 1rem",
                  borderRadius: "30px",
                  border: "1px solid rgba(41,19,12,0.2)",
                  background: "#fff",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: theme.espresso,
                }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Food Gallery Cards */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 1.5rem", color: "#888" }}>
            <p style={{ fontSize: "1.2rem" }}>No menu items found matching your search.</p>
            <button
              onClick={() => { setActiveCategory("All Menu"); setSearchQuery(""); }}
              style={{
                color: theme.orange,
                background: "none",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className="food-grid"
            style={{
              display: "grid",
              gap: "2rem",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="food-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(41, 19, 12, 0.08)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Image Container */}
                <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden", background: theme.sand }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  
              
                </div>

                {/* Card Body */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3
                    style={{
                      color: theme.espresso,
                      font: "400 1.4rem Georgia, serif",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#655b56",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      margin: "0 0 1.5rem",
                      flexGrow: 1,
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Buy Button linking to myshopeak */}
                  <a
                    href={STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: theme.espresso,
                      color: "#fff",
                      textDecoration: "none",
                      padding: "0.75rem 1.2rem",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>Order To Your Table</span>
                    <span style={{ color: theme.yellow }}></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Feature Showcase Banner */}
      <section
        className="banner-grid"
        style={{
          display: "grid",
          background: theme.espresso,
          color: "#fff",
        }}
      >
        <img
          src={eventImg}
          alt="Guests enjoying Huru Garden"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "320px",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "4rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p
            style={{
              color: theme.yellow,
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: "0 0 1.2rem",
            }}
          >
            In House Service & Event Management
          </p>
          <h2
            style={{
              font: "400 clamp(2.2rem, 5vw, 4.2rem)/0.95 Georgia, serif",
              margin: "0 0 1.5rem",
              wordBreak: "break-word",
            }}
          >
            Let Huru manage your event.
          </h2>
          <p style={{ color: "#d6c9c4", lineHeight: 1.8, maxWidth: "460px", marginBottom: "2rem" }}>
            Planning a gathering, meeting, or event? We handle complete food, drink, and seating arrangements across Huru Garden, 
            the Huru Garden Hall, private offices, and freelance spaces. Let us serve your guests with premium refreshments.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", color: theme.yellow, fontWeight: 600 }}>
              • Served directly to your table in Huru Garden
            </span>
            <span style={{ display: "flex", alignItems: "center", color: theme.yellow, fontWeight: 600 }}>
              • Catering for meetings in Huru Garden Hall
            </span>
            <span style={{ display: "flex", alignItems: "center", color: theme.yellow, fontWeight: 600 }}>
              • Refreshments served to your private office within Huru
            </span>
            <span style={{ display: "flex", alignItems: "center", color: theme.yellow, fontWeight: 600 }}>
              • Meals delivered to your freelance table within Huru
            </span>
            <span style={{ display: "flex", alignItems: "center", color: theme.yellow, fontWeight: 600 }}>
              • Full event hosting & guest drink management
            </span>
          </div>

          <div>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-purchase"
            >
              Purchase Your Freedom
            </a>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section
        style={{
          padding: "5rem 1.5rem",
          textAlign: "center",
          background: theme.yellow,
        }}
      >
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <h2
            style={{
              color: theme.espresso,
              font: "400 clamp(2.2rem, 4vw, 4rem)/1 Georgia, serif",
              margin: "0 0 1rem",
              wordBreak: "break-word",
            }}
          >
            Make room for something good.
          </h2>
          <p
            style={{
              color: theme.espresso,
              fontSize: "1.1rem",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            Order ahead for your table, office, or event. Instant in house orders are available on our store portal.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: theme.espresso,
                color: "#ffffff",
                padding: "1rem 2.2rem",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            >
              Purchase Your Freedom Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}