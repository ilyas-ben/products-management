import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./Header.css";
import { Link } from "react-router-dom";

const logoutUser = () => {
  // Implement logout logic here
};

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} component="div" className="header-container">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
           
              <HomeIcon />  
            
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="header-title"
            sx={{ flexGrow: 1 }}
          >
            Product Management
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
