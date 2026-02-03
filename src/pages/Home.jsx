import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { SideMenu } from "../components/SideMenu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import hotelImg from "../assets/hotelimg.jpg";
import royal from "../assets/royal.webp";
import restaurant from "../assets/res.png";

export const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const data = [
    { name: "Royal Room", path: "/rooms" },
    { name: "Deluxe Room", path: "/rooms" },
    { name: "Luxury Dining", path: "/dining" },
    { name: "Spa Services", path: "/spa" }
  ];

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero" style={{ backgroundImage: `url(${hotelImg})` }}>

        {/* NAVBAR */}
        <div className="navbar">
          <div className="navbar-left" style={{color:"#fff"}}>
            <SideMenu />
          </div>

          {/* SEARCH */}
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search rooms, dining, offers..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {search && (
            <div className="search-results">
              {filtered.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setSearch("");
                  }}
                >
                  {item.name}
                </p>
              ))}
            </div>
          )}

          <div className="navbar-right">
            <AccountCircleIcon
              className="profile-icon"
              onClick={() => navigate("/profile")}
            />
            <Button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="overlay">
          <h1>Ivory Grand Hotel</h1>
          <p>Luxury, Comfort, Royal Experience.</p>

          <div className="hero-buttons">
            <Button className="book-stay-btn" onClick={() => navigate("/login")}>
              Book Your Stay
            </Button>
            <Button className="rooms-btn" onClick={() => navigate("/rooms")}>
              View Rooms
            </Button>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">

  {/* ROW 1 – WELCOME */}
  <Grid container justifyContent="center">
    <Grid item xs={12} md={8} className="welcome-box">
      <h2>Welcome to Ivory Grand</h2>
      <p>
        Experience a blend of luxury, comfort, and elegance.
        Our hotel offers world-class hospitality, premium rooms,
        fine dining, and unforgettable moments.
      </p>
    </Grid>
  </Grid>

  {/* ROW 2 – CARDS */}
  <Grid
    container
    spacing={4}
    justifyContent="center"
    alignItems="stretch"
    style={{ marginTop: "40px" }}
  >
    <Grid item xs={12} md={4}>
      <div className="about-box">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✔ 5-Star Luxury Rooms</li>
          <li>✔ Royal Restaurant Experience</li>
          <li>✔ 24/7 Customer Support</li>
          <li>✔ Secure Online Booking</li>
          <li>✔ Spa & Wellness Center</li>
          <li>✔ Rooftop Pool & Lounge</li>
          <li>✔ Personalized Services</li>
          <li>✔ High-Speed Wi-Fi rooms</li>
          <li>✔ Conference & Event Facilities</li>
        </ul>
      </div>
    </Grid>

    <Grid item xs={12} md={4}>
      <div
        className="about-box image-card"
        onClick={() => navigate("/rooms")}
      >
        <img src={royal} alt="Royal Rooms" />
        <h3>Royal Rooms</h3>
        <p>Explore our premium luxury rooms</p>
      </div>
    </Grid>

    <Grid item xs={12} md={4}>
      <div
        className="about-box image-card"
        onClick={() => navigate("/dining")}
      >
        <img src={restaurant} alt="Restaurant" />
        <h3>Luxury Dining</h3>
        <p>Enjoy our world-class restaurant</p>
      </div>
    </Grid>
  </Grid>

</div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-content">

          <div className="footer-left">
            <h4>Ivory Grand Hotel</h4>
            <p>Luxury, Comfort, Royal Experience</p>
          </div>

          <div className="footer-center">
            <h4>Contact Us</h4>
            <p><LocationOnIcon /> Sivakasi, Tamil Nadu</p>
            <p><PhoneIcon /> +91 98765 43210</p>
            <p><EmailIcon /> ivorygrand@gmail.com</p>
          </div>

          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <FacebookIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </div>
          </div>

        </div>

        <hr />
        <p className="copyright">
          © 2026 Ivory Grand Hotel. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};
