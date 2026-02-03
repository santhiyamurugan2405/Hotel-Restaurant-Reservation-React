import React from "react";
import { useNavigate } from "react-router-dom";
import spaImg from "../assets/spa.jpg"; // make sure path is correct

export const Description = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Luxury Rooms",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Enjoy our 5-star luxury rooms with elegant decor and premium comfort.",
    },
    {
      title: "Fine Dining",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      description: "Savor gourmet dishes at our royal restaurant with stunning city views.",
    },
    {
      title: "Spa & Wellness",
      image: spaImg,
      description: "Relax and rejuvenate at our world-class spa and wellness center.",
    },
  ];

  const styles = {
    page: {
      width: "100%",
      minHeight: "100vh",
      padding: "50px 20px",
      background: "linear-gradient(to bottom, #fff6f5, #f8eaea)",
      fontFamily: "'Arial', sans-serif",
      color: "#4b2e2e",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    intro: {
      textAlign: "center",
      marginBottom: "50px",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    introText: {
      fontSize: "1.2rem",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    featuresSection: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1200px",
      marginBottom: "50px",
    },
    card: {
      position: "relative",
      flex: "1 1 300px",
      minHeight: "400px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "transform 0.3s, boxShadow 0.3s",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "#fff",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    },
    cardContent: {
      backgroundColor: "rgba(0,0,0,0.4)",
      padding: "20px",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      textAlign: "center",
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    cardDesc: {
      fontSize: "1rem",
      lineHeight: "1.4",
    },
    backButton: {
      padding: "12px 25px",
      marginTop: "30px",
      backgroundColor: "#4b2e2e",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.intro}>
        <h1 style={styles.heading}>Welcome to Ivory Grand</h1>
        <p style={styles.introText}>
          Experience a blend of luxury, comfort, and elegance. Our hotel offers
          world-class hospitality, premium rooms, fine dining, and unforgettable
          moments.
        </p>
      </div>

      <div style={styles.featuresSection}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{ ...styles.card, backgroundImage: `url(${feature.image})` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button style={styles.backButton} onClick={() => navigate("/")}>
        &larr; Back to Home
      </button>
    </div>
  );
};
