import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./dining.css";

import dining1 from "../assets/dining1.jpg";
import dining2 from "../assets/dinig2.jpg";   // FIXED NAME
import dining3 from "../assets/dining3.avif";
import dining4 from "../assets/dining4.jpg";
import dining5 from "../assets/dining5.jpg";
import dining6 from "../assets/dining6.jpg";
import { SideMenu } from "../components/SideMenu";

const dining = [
  { name: "Royal Restaurant", img: dining1, desc: "Fine dining experience" },
  { name: "Sky Lounge", img: dining2, desc: "Luxury rooftop dining" },
  { name: "Family Dining", img: dining3, desc: "Comfortable family meals" },
  { name: "Cafe Ivory", img: dining4, desc: "Coffee & desserts" },
  { name: "Private Dining", img: dining5, desc: "Exclusive private dining" },
  { name: "Sea View Restaurant", img: dining6, desc: "Scenic ocean dining" }
];

const data = [
  { name: "Royal Room", path: "/rooms" },
  { name: "Deluxe Room", path: "/rooms" },
  { name: "Luxury Dining", path: "/dining" },
  { name: "Spa Services", path: "/spa" },
  { name: "Conference Hall", path: "/conference" },
  { name: "Rooftop Pool", path: "/pool" }
];

export const Dining = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dining-page">

      {/* NAVBAR */}
      <div className="navbar">
        <SideMenu/>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search rooms, dining, offers..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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

      {/* SEARCH RESULTS */}
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

      <h2 className="dining-title">Luxury Dining</h2>
      <p className="dining-subtitle">
        A royal culinary experience awaits you
      </p>

      <Grid container spacing={4}>
        {dining.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card className="dining-card">
              <img src={item.img} alt={item.name} className="dining-img" />

              <CardContent className="dining-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>

                <Button
                  className="dining-btn"
                  onClick={() => navigate("/reservetable")}
                >
                  Reserve Table
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  );
};
