import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import WorkOutlineIcon from  '@mui/icons-material/WorkOutline';
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> <HomeIcon style={{marginBottom:'-3px'}}/> Home </Link>
        <Link to="/projects"> <LiveTvIcon style={{marginBottom:'-3px'}}/> Projects </Link>
        <Link to="/experience"><WorkOutlineIcon style={{marginBottom:'-3px'}}/> Experience </Link>
        <Link to="/resume"><FileCopyIcon style={{marginBottom:'-3px'}}/> Resume </Link>
      </div>
    </div>
  );
}

export default Navbar;
