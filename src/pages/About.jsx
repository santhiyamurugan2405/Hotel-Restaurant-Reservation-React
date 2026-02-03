import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #f9f1f0, #deb3ad)",
      color: "#663635",
    },
    hero: {
      height: "40vh",
      background:
        "url(https://images.unsplash.com/photo-1501117716987-c8e1ecb210b4) center/cover no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#663635",
      textAlign:"center",
      paddingTop: "10px",
      marginBottom: "00px"
    },
    content: {
      display: "flex",
      padding: "20px",
      gap: "40px",
    },
    text: {
      flex: 1,
      paddingBottom:"20px",
    },
    imageBox: {
      flex: 1,
    },
    image: {
      width: "100%",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    },
    button: {
      marginTop: "30px",
      backgroundColor: "#663635",
      color: "#fff",
      borderRadius: "25px",
      padding: "10px 25px",
      textTransform: "none",
    },
  };

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={{ fontSize: "48px" }}>About Ivory Stay</h1>
        <p style={{ fontSize: "20px" }}>
          Luxury. Comfort. Experience.
        </p>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <div style={styles.text}>
          <h2>Who We Are</h2>
          <p>
            Ivory Stay is a premium luxury hotel offering world-class rooms,
            dining experiences, spa services and unforgettable hospitality.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional service and create memorable
            experiences for every guest.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>5-Star Luxury Rooms</li>
            <li>24/7 Room Service</li>
            <li>Fine Dining Restaurants</li>
            <li>Spa & Wellness Center</li>
            <li>Trusted by 10,000+ Guests</li>
          </ul>

          <Button
            variant="contained"
            sx={{
              ...styles.button,
              "&:hover": {
                backgroundColor: "#deb3ad",
                color: "#663635",
              },
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>

        <div style={styles.imageBox}>
          <img
            style={styles.image}
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
          />
        </div>
      </div>
    </div>
  );
};
