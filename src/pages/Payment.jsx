import React, { useState } from "react";
import { Button, TextField, MenuItem, Alert } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "./payment.css";
import qr from "../assets/qrcode.png";

export const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // DATA FROM Book.jsx
  const booking = location.state;

  // safety check
  if (!booking) {
    return <h2 style={{ textAlign: "center" }}>No Booking Found</h2>;
  }

  const [paymentType, setPaymentType] = useState("UPI");
  const [success, setSuccess] = useState(false);

  const roomPrices = {
    "Deluxe Suite": 3500,
    "Royal Suite": 5000,
    "Family Room": 6500,
    "Presidential Room": 10000,
  };

  const bookingId = "IVORY" + Math.floor(Math.random() * 100000);
  const totalAmount = roomPrices[booking.room] * booking.guests;

  const handlePay = () => {
    setSuccess(true);

    setTimeout(() => {
      navigate("/booking-confirmation", {
        state: {
          ...booking,
          bookingId,
          paymentType,
          totalAmount,
          paymentStatus: "Paid",
        },
      });
    }, 1500);
  };

  return (
    <div className="payment-page">
      <div className="payment-wrapper">

        <div className="payment-card">
          <h2>Secure Payment</h2>

          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Room:</strong> {booking.room}</p>
          <p><strong>Guests:</strong> {booking.guests}</p>
          <p><strong>Check-In:</strong> {booking.checkIn}</p>
          <p><strong>Check-Out:</strong> {booking.checkOut}</p>
          <p><strong>Booking ID:</strong> {bookingId}</p>

          {success && (
            <Alert severity="success" className="success-msg">
              Payment Successful!
            </Alert>
          )}

          <TextField
            select
            label="Payment Type"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Card">Debit / Credit Card</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
          </TextField>

          <h3>Total Amount: ₹{totalAmount}</h3>

          <Button className="pay-btn" fullWidth onClick={handlePay}>
            Pay Now
          </Button>
        </div>

        <div className="qr-section">
          <h3>Scan & Pay</h3>
          <img src={qr} alt="QR Code" />
          <p>Scan using GPay / PhonePe / Paytm</p>
        </div>

      </div>
    </div>
  );
};
