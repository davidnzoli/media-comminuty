import React, { useState } from "react";

const tab = [
  { id: 1, nom: "orange" },
  { id: 2, nom: "mangue" },
  { id: 3, nom: "goyave" },
];

// const Tab = () => {
//   return <h1 style={{ color: "black" }}>les hommes</h1>;
// };

const Article = () => {
  const [state, setState] = useState(false);
  const result = () => {
    return new Promise((results, reject) => {
      setTimeout(() => {
        results(setState(true));
      }, 3000);
    });
  };
  result().then((n) => {
    return n;
  });
  return (
    <div style={{ marginTop: "200px" }}>
      <p>{state}</p>
      <div className="ok">
        {state ? (
          tab.map((e) => {
            return <h3>{e.nom}</h3>;
          })
        ) : (
          <h3>ok..</h3>
        )}
      </div>
    </div>
  );
};

export default Article;
