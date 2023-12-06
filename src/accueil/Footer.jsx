import React from "react";
import { NavLink } from "react-router-dom";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DartMode from "../components/theme/DartMode";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-dessus">
        <div className="title-glob">
          <img src="./icon.JPG" alt="" id="icon-title" />
          <h2 id="title-footer">Eplm media</h2>
        </div>
        <div className="menu-glob">
          <div className="cards-footer">
            <h2 id="title-card-footer">Nos services</h2>
            <div
              className="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p>{<DesignServicesOutlinedIcon />}</p>
              <p id="para-card-footer">Design</p>
            </div>
            <div
              className="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p>{<SlowMotionVideoOutlinedIcon />}</p>
              <p id="para-card-footer">Vidéo média</p>
            </div>
            <div
              className="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p>{<LocalPrintshopIcon />}</p>
              <p id="para-card-footer">Impression T-shirt</p>
            </div>
            <div
              className="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p>{<LocalPrintshopIcon />}</p>
              <p id="para-card-footer">impression Badje</p>
            </div>
            <div
              className="div"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p>{<LocalPrintshopIcon />}</p>
              <p id="para-card-footer">impression Photos</p>
            </div>
          </div>
          <div className="cards-footer">
            <h2 id="title-card-footer">A propos</h2>
            <div
              className="glob-cont-apropos"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <div className="div-propos">
                <p id="para-card-footer">
                  Learn more Learn more Learn more Learn more Learn more Learn
                  more Learn more Learn more Learn more Learn more
                </p>
              </div>
              <div className="div-propos">
                <p id="para-card-footer">
                  Learn more Learn more Learn more Learn more Learn more Learn
                  more Learn more Learn Learn more
                </p>
              </div>
            </div>
          </div>
          <div className="cards-footer">
            <h2 id="title-card-footer">Contact</h2>
            <p>
              <NavLink
                to="/Contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact us
              </NavLink>
            </p>
            <div className="reseaux-footer">
              <img src="./facebook(1).png" alt="" id="image-reseau" />
              <img src="./telegramme.png" alt="" id="image-reseau" />
              <img src="./twitter.png" alt="" id="image-reseau" />
              <img src="./youtube.png" alt="" id="image-reseau" />
              <img src="./instagram.png" alt="" id="image-reseau" />
              <img src="./pinterest.png" alt="" id="image-reseau" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p id="copy">Tout droit réservé année 2023</p>
        <p
          id="media"
          style={{
            display: "flex",
            gap: "3px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Médias/Goma <DartMode />
        </p>
      </div>
    </div>
  );
};

export default Footer;
