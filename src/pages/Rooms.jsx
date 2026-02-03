import React, { useState} from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./rooms.css";

import deluxe from "../assets/duluxe.jpg";
import royal from "../assets/royal.webp";
import family from "../assets/family.jpg";
import presidential from "../assets/presidential.jpg";
import suite from "../assets/suite.jpg";
import ocean from "../assets/ocean.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SideMenu } from "../components/SideMenu";


const rooms = [
  { name: "Deluxe Suite", img: deluxe, price: "₹3,500" },
  { name: "Royal Premium", img: royal, price: "₹5,000" },
  { name: "Family Luxury", img: family, price: "₹6,500" },
  { name: "Presidential Suite", img: presidential, price: "₹10,000" },
  { name: "Executive Suite", img: suite, price: "₹7,500" },
  { name: "Ocean View Room", img: ocean, price: "₹8,000" }
];
const data = [
  { name: "Royal Room", path: "/rooms" },
  { name: "Deluxe Room", path: "/rooms" },
  { name: "Luxury Dining", path: "/dining" },
  { name: "Spa Services", path: "/spa" },
  { name: "Conference Hall", path: "/conference" },
  { name: "Rooftop Pool", path: "/pool" }
];

export const Rooms = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  

  return (
    <div className="rooms-page">
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

      <h2 className="rooms-title">Ivory Signature Rooms</h2>
      <p className="rooms-subtitle">
        Experience luxury, comfort and royal hospitality
      </p>

      <Grid container spacing={4}>
        {rooms.map((room, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card className="room-card">
              <img src={room.img} alt={room.name} className="room-img" />

              <CardContent className="room-content">
                <h3>{room.name}</h3>
                <p>From {room.price} / Night</p>

                <Button
                  className="room-btn"
                  onClick={() => navigate("/login")}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
