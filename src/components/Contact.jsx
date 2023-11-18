import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Contact = () => {
  return (
    <div className="contact-component">
      <div className="divImage">
        <img src="./contact.jpg" alt="imageConact" id="image-contact" />
      </div>
      <div className="formulaires-contact">
        <div className="title-dessus">
          <h2
            style={{
              fontSize: "28px",
              color: "rgb(255, 170, 11)",
              fontWeight: "600",
            }}
            id="h2"
          >
            Contactez-nous
          </h2>
          <p style={{ fontSize: "16px" }}>
            Pour plus d'information sur EPLM Média, veillez nous laisser un
            message {<MarkEmailUnreadOutlinedIcon />}.
          </p>
        </div>
        <TextField label="Adresse mail" variant="outlined" id="mail" />
        <TextField label="Votre nom" variant="outlined" id="nom" />
        <input type="textarea" id="objet" placeholder="Objet" />
        <Button
          variant="contained"
          endIcon={<SendOutlinedIcon />}
          id="btn-contact"
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default Contact;
