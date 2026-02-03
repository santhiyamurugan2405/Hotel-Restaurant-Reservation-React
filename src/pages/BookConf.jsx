import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Button, Typography } from "@mui/material";
import "./book.css";

export const BookConf = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return (
      <div className="book-page">
        <Card className="booking-card">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              No Booking Found
            </Typography>

            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => navigate("/book")}
            >
              Go to Booking Page
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="book-page">
      <Card className="booking-card">
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Booking Confirmation
          </Typography>

          <Typography align="center" color="textSecondary" gutterBottom>
            Thank you for booking with Ivory Grand Hotel
          </Typography>

          <div className="booking-details">
            <p><strong>Guest Name:</strong> {booking.name}</p>
            <p><strong>Room Type:</strong> {booking.room}</p>
            <p><strong>Check-In:</strong> {booking.checkIn}</p>
            <p><strong>Check-Out:</strong> {booking.checkOut}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>

            <p>
              <strong>Booking ID:</strong> IVORY
              {Math.floor(100000 + Math.random() * 900000)}
            </p>

            <p style={{ color: "green", fontWeight: "bold" }}>
              Payment Status: Paid Successfully ✅
            </p>
          </div>

          <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#663635",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#4f2a29"
                }
              }}
              onClick={() => navigate("/")}>
              Back to Home
            </Button>

        </CardContent>
      </Card>
    </div>
  );
};
