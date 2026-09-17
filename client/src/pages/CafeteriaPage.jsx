import { Coffee, MapPin, Utensils, Users } from "lucide-react";
import Button from "../components/ui/Button";
import cafeteriaImg from "../../../assets/762372387_122119643931272215_4697147077892752819_n.jpg";
import eventImg from "../../../assets/huruchill.jpg";

const theme = {
  espresso: "#29130c",
  orange: "#f26622",
  yellow: "#f7f195",
  cream: "#f8f5ef",
  grey: "#e2dede",
};

const menuSections = [
  {
    title: "Something cold",
    description:
      "Fresh drinks and easy refreshments for a slow afternoon or a day by the pool.",
    items: [
      "Sodas and cold drinks",
      "Fresh juice",
      "Bottled water",
      "Tea and coffee",
    ],
  },
  {
    title: "From the kitchen",
    description:
      "Comforting meals prepared for quick lunches, family visits, and full days at Huru.",
    items: [
      "Assorted meals",
      "Nyama choma",
      "Light bites",
      "Family-style plates",
    ],
  },
  {
    title: "For your gathering",
    description:
      "Flexible food and drink arrangements for meetings, celebrations, and group days out.",
    items: [
      "Group meal arrangements",
      "Packed lunch requests",
      "Shared platters",
      "Custom catering enquiries",
    ],
  },
];

export default function CafeteriaPage() {
  return (
    <div style={{ background: theme.cream, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Dynamic Mobile Layout Styles */}
      <style>{`
        .hero-section {
          padding: 5rem 1.5rem 3rem;
        }
        .intro-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .menu-grid {
          grid-template-columns: 1fr !important;
        }
        .banner-grid {
          grid-template-columns: 1fr !important;
        }
        
        @media (min-width: 768px) {
          .hero-section {
            padding: 7rem 11vw 5rem;
          }
          .intro-grid {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.7fr) !important;
            gap: 5rem !important;
          }
          .menu-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .banner-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          minHeight: "62vh",
          display: "flex",
          alignItems: "flex-end",
          color: "#fff",
          backgroundImage: `linear-gradient(90deg, rgba(41, 19, 12, 0.86), rgba(41, 19, 12, 0.25)), url(${cafeteriaImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ maxWidth: "700px", width: "100%" }}>
          <p
            style={{
              color: theme.yellow,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 1.25rem",
            }}
          >
            Cafeteria Services
          </p>
          <h1
            style={{
              font: "400 clamp(2.5rem, 7vw, 7.5rem)/0.95 Georgia, serif",
              margin: "0 0 1.5rem",
              wordBreak: "break-word",
            }}
          >
            Eat well,
            <br />
            <i style={{ color: theme.yellow }}>stay longer.</i>
          </h1>
          <p
            style={{
              maxWidth: "520px",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#f8f5ef",
              margin: 0,
            }}
          >
            Come hungry and settle into the garden. Huru&apos;s cafeteria serves
            easy meals, cold drinks, nyama choma, and refreshments for everyday
            visits and special gatherings.
          </p>
        </div>
      </section>

      {/* Intro & Menu Grid Section */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem" }}
      >
        <div
          className="intro-grid"
          style={{
            display: "grid",
            alignItems: "end",
            marginBottom: "3rem",
          }}
        >
          <div>
            <p
              style={{
                color: theme.orange,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: "0 0 1rem",
              }}
            >
              A table for every kind of day
            </p>
            <h2
              style={{
                color: theme.espresso,
                font: "400 clamp(2.2rem, 5vw, 5rem)/0.95 Georgia, serif",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              Good food belongs
              <br />
              <i style={{ color: theme.orange }}>in the middle of it.</i>
            </h2>
          </div>
          <p style={{ color: "#655b56", lineHeight: 1.8, margin: 0 }}>
            Whether you are taking a break between activities or planning lunch
            for a group, our team can help shape a simple, welcoming food
            experience around your visit.
          </p>
        </div>

        <div
          className="menu-grid"
          style={{
            display: "grid",
            gap: "1px",
            background: "rgba(41, 19, 12, 0.18)",
            borderTop: `3px solid ${theme.orange}`,
          }}
        >
          {menuSections.map((section) => (
            <article
              key={section.title}
              style={{
                background: theme.cream,
                padding: "2rem 1.5rem 2.25rem",
              }}
            >
              <h3
                style={{
                  color: theme.espresso,
                  font: "400 1.8rem Georgia, serif",
                  margin: "0 0 0.8rem",
                }}
              >
                {section.title}
              </h3>
              <p
                style={{
                  color: "#655b56",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: "0 0 1.4rem",
                }}
              >
                {section.description}
              </p>
              <ul
                style={{
                  color: theme.espresso,
                  lineHeight: 2,
                  paddingLeft: "1.1rem",
                  margin: 0,
                  fontSize: "0.9rem",
                }}
              >
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Feature Section */}
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
          alt="Guests enjoying the Huru Garden grounds"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "280px",
            maxHeight: "450px",
            objectFit: "cover",
          }}
        />
        <div style={{ padding: "3rem 1.5rem" }}>
          <p
            style={{
              color: theme.yellow,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              margin: "0 0 1.2rem",
            }}
          >
            Made for Huru days
          </p>
          <h2
            style={{
              font: "400 clamp(2.2rem, 5vw, 4.5rem)/0.95 Georgia, serif",
              margin: "0 0 1.5rem",
              wordBreak: "break-word",
            }}
          >
            Pull up a chair.
          </h2>
          <p style={{ color: "#d6c9c4", lineHeight: 1.8, maxWidth: "430px" }}>
            Enjoy your meal near the garden, pool, and play areas. For larger
            groups, send us your plans and we will help coordinate the menu and
            timing.
          </p>
          <div style={{ display: "grid", gap: "1rem", margin: "2rem 0" }}>
            <span>
              <Coffee
                size={18}
                color={theme.orange}
                style={{ verticalAlign: "middle", marginRight: "0.6rem" }}
              />{" "}
              Drinks, tea, and coffee
            </span>
            <span>
              <Utensils
                size={18}
                color={theme.orange}
                style={{ verticalAlign: "middle", marginRight: "0.6rem" }}
              />{" "}
              Meals and nyama choma
            </span>
            <span>
              <Users
                size={18}
                color={theme.orange}
                style={{ verticalAlign: "middle", marginRight: "0.6rem" }}
              />{" "}
              Group food requests
            </span>
            <span>
              <MapPin
                size={18}
                color={theme.orange}
                style={{ verticalAlign: "middle", marginRight: "0.6rem" }}
              />{" "}
              Kakuma 3, Zone 2, Block 8
            </span>
          </div>
          <Button to="/events?service=Cafeteria%20Services">
            Request cafeteria service
          </Button>
        </div>
      </section>

      {/* Call To Action Section */}
      <section
        style={{
          padding: "4rem 1.5rem",
          textAlign: "center",
          background: theme.yellow,
        }}
      >
        <h2
          style={{
            color: theme.espresso,
            font: "400 clamp(2rem, 4vw, 4rem)/1 Georgia, serif",
            margin: "0 0 1rem",
            wordBreak: "break-word",
          }}
        >
          Make room for something good.
        </h2>
        <p
          style={{
            color: theme.espresso,
            maxWidth: "520px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.7,
          }}
        >
          Menus and group arrangements are available on request.
        </p>
        <Button to="/contact?service=Cafeteria%20Services">
          Ask about the menu
        </Button>
      </section>
    </div>
  );
}
