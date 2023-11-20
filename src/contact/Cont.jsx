import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import Contact from "../components/Contact";

const Cont = () => {
  return (
    <div className="contact">
      <h2 id="h2">Nous contactez</h2>
      <div className="localisation">
        <div className="card-cont">
          <div
            className="title-card"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p>{<HomeIcon fontSize="large" />}</p>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
              Adresse partielle
            </h2>
          </div>

          <h2 style={{ fontSize: "16px", fontWeight: "400" }}>
            Rdc -Goma / Ville
          </h2>
        </div>
        <div className="card-cont">
          <div
            className="title-card"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p>{<LocalPhoneIcon fontSize="large" />}</p>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>Mobile</h2>
          </div>
          <h2 style={{ fontSize: "16px", fontWeight: "400" }}>
            Tél: +243 995 157 300
          </h2>
        </div>
        <div className="card-cont">
          <div
            className="title-card"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p>{<LocationOnIcon fontSize="large" />}</p>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>
              Localisation
            </h2>
          </div>
          <h2 style={{ fontSize: "16px", fontWeight: "400" }}>
            Goma/ville av. Des écoles Q. Les volcans
          </h2>
        </div>
      </div>
      <div className="glob-contact-compo">
        <Contact />
      </div>
    </div>
  );
};

export default Cont;
