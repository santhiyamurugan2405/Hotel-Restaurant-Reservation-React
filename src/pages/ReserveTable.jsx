import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./reserve.css";

export const ReserveTable = () => {
  const navigate = useNavigate(); // initialize navigate
  const [formData, setFormData] = useState({
    guestName: "",
    tableType: "",
    members: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e) => {
    e.preventDefault();

    // Show alert
    alert(
      `Reservation Successful!\nGuest: ${formData.guestName}\nTable: ${formData.tableType}\nMembers: ${formData.members}`
    );

    // Navigate to BookConf.jsx
    navigate("//booking-confirmation"); // make sure your route path matches exactly
  };

  return (
    <div className="reserve-page">
      <div className="reserve-card">
        <h2>Reserve a Table</h2>
        <p className="subtitle">Fill in your details</p>

        <form onSubmit={handleBook}>
          <input
            type="text"
            name="guestName"
            placeholder="Guest Name"
            value={formData.guestName}
            onChange={handleChange}
            required
          />

          <select
            name="tableType"
            value={formData.tableType}
            onChange={handleChange}
            required
          >
            <option value="">Select Table Type</option>
            <option value="Regular">Regular</option>
            <option value="VIP">VIP</option>
            <option value="Couple">Couple</option>
          </select>

          <input
            type="number"
            name="members"
            placeholder="Number of Members"
            value={formData.members}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};
