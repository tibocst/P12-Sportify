import React from "react";
import { useState } from 'react';
import "../../styles/ExplicationSite.css";

function ExplicationSite() {
const [closeModal, setcloseModal] = useState(false);
    
  return (
    <>
    {closeModal ? null : (<div className="explicationSite">
      <div onClick={() => setcloseModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <h1>Explication du projet</h1>
      <p>
        Ce site est un projet d'étude réalisé pour une formation OpenClassrooms,
        le but était d'utiliser la libraire{" "}
        <a
          href="https://recharts.org/en-US/"
          title="Lien vers la librairie Recharts"
        >
          Recharts
        </a>{" "}
        et de la styliser pour convenir à la maquette donnée.
      </p>
    </div>)}
    </>
  );
}

export default ExplicationSite;
