import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const Navbar = () => {
  const [activation, setactivation] = useState(false);
  const TogleButon = () => {
    setactivation(!activation);
  };

  if (activation == true) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  return (
    <React.Fragment>
      <div className="cont-nav">
        <div className="item-left">
          <div className="icon-cont">
            <img id="image-nav" src="./icon.JPG" alt="" />
            <h1 id="title-left-nav">
              <strong>Eplm media</strong>
            </h1>
          </div>
          <div className="menu-respo">
            <MenuIcon
              style={{ width: "60%", height: "50px" }}
              color="action"
              onClick={TogleButon}
            />
          </div>
        </div>
        {/* md:fle-col */}
        <div className={`item-medium ${activation ? "action" : "newclasse"}`}>
          <div
            className="close-click"
            style={{
              position: "absolute",
              right: "15px",
              top: "20px",
              marginBottom: "100px",
            }}
          >
            <CloseIcon
              id="btn-close"
              sx={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setactivation(false)}
            />
          </div>
          <div
            className="logo-image-media"
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <img
              id="image-nav"
              src="./icon.JPG"
              alt=""
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            />
            <h1
              id="title-left-nav"
              style={{
                fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              <strong>Eplm media</strong>
            </h1>
          </div>

          <ul id="ul-nav">
            <li id="list-nav">
              <NavLink to="/" id="ancre">
                Accueil
              </NavLink>
            </li>
            <li id="list-nav">
              <NavLink to="/Article" id="ancre">
                Article
              </NavLink>
            </li>
            <li id="list-nav">
              <NavLink to="/Contact" id="ancre">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="btn-respo">
            <Button
              variant="contained"
              color="primary"
              //   sx={{ padding: "20px", paddingLeft: "60px", paddingright: "60px" }}
            >
              Reservation
            </Button>
          </div>
        </div>

        <div className="item-rigth">
          <button id="btn-conn-nav">Reservation</button>
          {/* <Button
            variant="contained"
            id="btn-conn-nav"
            // sx={{ padding: "10px", fontSize: "10px" }}
          >
            Reservation
          </Button> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
