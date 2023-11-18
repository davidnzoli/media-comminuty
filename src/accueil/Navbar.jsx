import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            <MenuIcon style={{ width: "60%", height: "50px" }} color="action" />
          </div>
        </div>
        <div class="item-medium md:fle-col">
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
        </div>
        <div className="item-rigth">
          <button id="btn-conn-nav">Connexion</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
