// import { Button } from "@mui/material";
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { useContext } from "react";

// export const MenuRespo = (props) => {
//   //   const sliding = () => {
//   //     document.querySelectorAll(".ij").setAttribute("id", "slide");
//   //   };
//   //   if (props.active == true) {
//   //     sliding();
//   //   }

//   return props.active == true ? (
//     <div
//       className="menuRespo"
//       id="ok"
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "start",
//         gap: "30px",
//         backgroundColor: "rgba(255, 255, 255, 0.436)",
//         backdropFilter: "blur(7px)",
//         position: "fixed",
//         top: "0px",
//         left: "0px",
//         zIndex: "1000",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           right: "15px",
//           top: "20px",
//           marginBottom: "100px",
//         }}
//       >
//         <CloseIcon
//           sx={{ width: "40px", height: "40px", cursor: "pointer" }}
//           onClick={() => {
//             props.setactive(false);
//           }}
//         />
//       </div>
//       <div
//         style={{
//           marginTop: "100px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "start",
//         }}
//       >
//         <img
//           id="image-nav"
//           src="./icon.JPG"
//           alt=""
//           style={{
//             width: "60px",
//             height: "60px",
//             objectFit: "cover",
//             borderRadius: "10px",
//             border: "1px solid black",
//           }}
//         />
//         <h1
//           id="title-left-nav"
//           style={{
//             fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
//           }}
//         >
//           <strong>Eplm media</strong>
//         </h1>
//       </div>

//       <div
//         className="listes"
//         style={{
//           width: "100%",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "8px",
//         }}
//       >
//         <NavLink
//           to="/"
//           id="ancre-respo"
//           style={{ textDecoration: "none", fontSize: "20px" }}
//         >
//           Accueil
//         </NavLink>
//         <NavLink
//           to="/Article"
//           id="ancre-respo"
//           style={{ textDecoration: "none", fontSize: "20px" }}
//         >
//           Article
//         </NavLink>
//         <NavLink
//           to="/Contact"
//           id="ancre-respo"
//           style={{ textDecoration: "none", fontSize: "20px" }}
//         >
//           Contact
//         </NavLink>
//       </div>
//       <div className="btn-respo">
//         <Button
//           variant="contained"
//           color="primary"
//           //   sx={{ padding: "20px", paddingLeft: "60px", paddingright: "60px" }}
//         >
//           Reservation
//         </Button>
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// };
