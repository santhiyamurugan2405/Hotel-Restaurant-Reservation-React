import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  MenuItem,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./book.css";

const rooms = [
  "Deluxe Suite",
  "Royal Suite",
  "Family Room",
  "Presidential Room",
];

export const Book = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    room: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: formData });
  };

  return (
    <div className="book-page">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={11} sm={9} md={5}>
          <Paper elevation={8} className="book-card">
            <Typography variant="h4" align="center" gutterBottom>
              Book Your Stay
            </Typography>

            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Fill in the details to confirm your booking
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                label="Room Type"
                name="room"
                value={formData.room}
                onChange={handleChange}
                fullWidth
                required
                select
                margin="normal"
              >
                {rooms.map((room, i) => (
                  <MenuItem key={i} value={room}>
                    {room}
                  </MenuItem>
                ))}
              </TextField>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Check-In"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Check-Out"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <TextField
                label="Guests"
                name="guests"
                type="number"
                value={formData.guests}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                inputProps={{ min: 1 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="error"
                fullWidth
                className="book-stay-btn"
                sx={{ mt: 2 }}
              >
                Confirm Booking
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

