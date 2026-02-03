import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Alert message
    alert("Login successful!");

    // Navigate to Book.jsx page
    navigate("/book", { state: loginData });
  };

  return (
    <div className="login-page">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={11} sm={8} md={4}>
          <Paper elevation={6} className="login-card">
            <Typography variant="h4" align="center" gutterBottom>
              Welcome Back
            </Typography>

            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Sign in to continue to your account
            </Typography>

            <form onSubmit={handleSubmit} className="login-form">
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <Button
                type="submit"
                variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#663635",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#693937"
                }
              }}
              >
                Login
              </Button>
            </form>

            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              sx={{ mt: 2 }}
            >
              Don&apos;t have an account?{" "}
              <span
                className="signup-link"
                onClick={() => navigate("/signup")}
                style={{ cursor: "pointer", color: "#663635" }}
              >
                Sign Up
              </span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};


