import React, { useEffect, useState } from "react";
import GridItems from "../components/Grid";
import SecVision from "../components/SecVision";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";
import Contact from "../components/Contact";
import { NavLink } from "react-router-dom";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

function Defile() {
  const Clicked = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="btn-defil"
      style={{
        position: "fixed",
        right: "5px",
        top: "540px",
        borderRadius: "100%",
        border: "none",
        padding: "5px",
        backgroundColor: "rgb(9, 104, 228)",
        opacity: "0.3",
        zIndex: "100",
        cursor: "pointer",
      }}
      onClick={() => {
        Clicked();
      }}
    >
      <KeyboardArrowUpIcon style={{ color: "white" }} fontSize="large" />
    </div>
  );
}

export default function Body() {
  const [normal, changement] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", Scroll);
    function Scroll() {
      if (window.scrollY > 131) {
        changement(true);
      } else {
        changement(false);
      }
      return () => {
        window.removeEventListener("scroll", Scroll);
      };
    }
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", Effet);
  //   function Effet() {
  //     const item = document.querySelector(".glob-vision-left");
  //     const { scrollTop, clientHeight } = document.documentElement;
  //     const affiche = item.getBoundingClientRect().top;
  //     if (scrollTop > (scrollTop + affiche).toFixed() - clientHeight * 0.5) {
  //       item.classList.add("activ");
  //     }
  //   }
  // }, []);

  return (
    <div className="cont-body" style={{ position: "relative" }}>
      {normal && <Defile />}
      <div className="some-texte-accueil">
        <h1 id="tilte-accueil-1">
          <span id="span-accueil">Media comminuty eplm</span> vient pour vous
          aider
          <img id="icons-cam" src="./image1.JPG" alt="img" />
        </h1>
        <p id="para-accueil">
          A trouver des solutions idéals et pratiques à vos besoins, Une grande
          équipe des informaticien Cameraman et Designer. Tout droit vers notre
          objectif, il est celle de vous aider dans vos projet numérique fetons
          nos anniversaire ensemble, allons-y prendre part dans l'uns des studio
          du media eplm Goma. venez nombreux et vous ne serez pas deçu !
        </p>
      </div>
      <div className="btn-material">
        <Button variant="text">Creez compte</Button>
        <Button variant="outlined">Connexion</Button>
      </div>
      <div className="grid-cont-4">
        {GridItems.map((el) => {
          return (
            <div className="glob-items">
              <div className="contenu-dessu">
                <h1 id="title-items">
                  {el.id}. {el.title}
                </h1>
                <p id="para-items">{el.para}</p>
              </div>
              <img id="img-items" src={el.image} alt="img" />
            </div>
          );
        })}
      </div>

      <div className="glob-visions">
        <div className="glob-vision-left">
          {SecVision.map((elements) => {
            return elements.vision.map((items1) => {
              return (
                <div className="element-glob-vision-left">
                  <h1 id="title-vision">
                    {items1.idVision}. {items1.title}
                  </h1>
                  <p id="para-vision">{items1.para}</p>
                </div>
              );
            });
          })}
          <NavLink to="/Contact">
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon fontSize="small" />}
            >
              Nous contactez
            </Button>
          </NavLink>
        </div>

        <div className="glob-service-rigth">
          {SecVision.map((el) => {
            return el.service.map((it) => {
              return (
                <>
                  <h1 id="title-servision">
                    {it.idService}. {it.servtitle}
                  </h1>
                  <div className="grid-cont-4-2">
                    {it.contenu.map((img) => {
                      return (
                        <div className="carte">
                          <p
                            style={{
                              borderRadius: "10px",
                              padding: "10px",
                              backgroundColor: "rgb(237, 235, 235)",
                              color: "rgb(9, 104, 228)",
                            }}
                          >
                            {img.iconService}
                          </p>
                          <h2 id="title-carte-service">{img.title}</h2>
                          <p id="para-carte-service">{img.someTexts}</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            });
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
}
