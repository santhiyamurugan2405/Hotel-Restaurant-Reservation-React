import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "./sidemenu.css";

export const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Rooms", path: "/rooms" },
    { text: "Dining", path: "/dining" },
    { text: "Spa", path: "/spa" },
    { text: "Booking", path: "/book" },
    { text: "About Us", path: "/about" },
    { text: "Contact Us", path: "/contact" },
    { text: "Description", path: "/description" }
  ];

  return (
    <>
      <MenuIcon className="menu-icon" onClick={() => setOpen(true)} />

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="side-drawer">
          <h3>Ivory Grand</h3>
          <Divider />

          <List>
            {menuItems.map(item => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};
