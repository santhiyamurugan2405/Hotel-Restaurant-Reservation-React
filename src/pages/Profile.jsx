import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography, Grid } from "@mui/material";
import "./profile.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const emptyProfile = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const Profile=() => {
  const [profile, setProfile] = useState(emptyProfile);
  const [savedProfile, setSavedProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Load profile
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userProfile"));
    if (stored) setSavedProfile(stored);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // CREATE / UPDATE
  const handleSave = () => {
    if (!profile.name || !profile.email) {
      alert("Name & Email required");
      return;
    }

    localStorage.setItem("userProfile", JSON.stringify(profile));
    setSavedProfile(profile);
    setIsEditing(false);
  };

  // EDIT
  const handleEdit = () => {
    setProfile(savedProfile);
    setIsEditing(true);
  };

  return (
    <div className="profile-page">
      <Grid container justifyContent="center">

        {/* CREATE PROFILE CARD */}
        {!savedProfile && (
          <Grid item xs={12} md={4}>
            <Card className="profile-form-card">
              <CardContent>
                <Typography className="profile-title">
                  Create Profile
                </Typography>

                <TextField label="Name" name="name" fullWidth onChange={handleChange} />
                <TextField label="Email" name="email" fullWidth onChange={handleChange} />
                <TextField label="Phone" name="phone" fullWidth onChange={handleChange} />
                <TextField label="Address" name="address" fullWidth onChange={handleChange} />

                <Button fullWidth onClick={handleSave}>
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* USER PROFILE CARD */}
        {savedProfile && !isEditing && (
          <Grid item xs={12} md={5}>
            <Card className="profile-view-card">
              <CardContent>
                <Typography className="profile-title">
                  <AccountCircleIcon/>
                  <h4 style={{color:"#663635"}}>Profile</h4>
                </Typography>

                <p><b>Name:</b> {savedProfile.name}</p>
                <p><b>Email:</b> {savedProfile.email}</p>
                <p><b>Phone:</b> {savedProfile.phone}</p>
                <p><b>Address:</b> {savedProfile.address}</p>

                <Button onClick={handleEdit}>
                  Edit Profile
                </Button>
              </CardContent>
              
            </Card>
            <button onClick={() => navigate("/")}>Back to Home</button>
          </Grid>
        )}

        {/* EDIT PROFILE CARD */}
        {isEditing && (
          <Grid item xs={12} md={4}>
            <Card className="profile-form-card">
              <CardContent>
                <Typography className="profile-title">
                  Edit Profile
                </Typography>
                

                <TextField label="Name" name="name" value={profile.name} fullWidth onChange={handleChange} />
                <TextField label="Email" name="email" value={profile.email} fullWidth onChange={handleChange} />
                <TextField label="Phone" name="phone" value={profile.phone} fullWidth onChange={handleChange} />
                <TextField label="Address" name="address" value={profile.address} fullWidth onChange={handleChange} />

                <Button fullWidth onClick={handleSave}>
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
        )}

      </Grid>
    </div>
  );
}
