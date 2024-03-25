import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { IconButton, Paper } from "@mui/material";
import navIcon1 from '../assets/img/nav-icon1.svg';
import gmail from '../assets/img/gmail.svg';
import whatsapp from '../assets/img/whatsapp.svg';
import github from "../assets/img/MdiGithub.svg";

export default function DrawerComp() {
  const [flag, setFlag] = useState(false);

  const toggleDrawer = () => {
    setFlag(!flag); // Toggles the flag state
  };

  return (
    <div className="drawer-container" >
      <div className="drawer-wrapper" style={{backgroundColor:"black"}}>
      <IconButton onClick={toggleDrawer}>
        <ListRoundedIcon className="link" />
      </IconButton>

      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
      <Paper
            sx={{
              width: 170, // Set the width of the drawer
            }}
          >
        <div className="mobile-drawer">
          <a href="#home">
            <p className="link">Home</p>
          </a>
          <a href="#skills">
            <p className="link">Skills</p>
          </a>
          <a href="#projects">
            <p className="link">Projects</p>
          </a>
          <a href="https://drive.google.com/file/d/1FN4EBqUq-qxsLZ8sy9I__oY7mxcbejr3/view?usp=drive_link" target="_blank">Resume</a>
          <a href="#footer">
            <p className="link">Socials</p>
          </a>
          <a href="#connect">
            <p className="link">Let's Connect</p>
          </a>
        </div>
        </Paper>
      </Drawer >
    </div>
    </div>
  );
}

