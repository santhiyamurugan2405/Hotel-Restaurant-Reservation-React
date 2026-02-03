import React from "react";
import "./spa.css";
import spaImg from "../assets/spa.jpg";

export const Spa = () => {
  return (
    <div className="spa-page">
      <div
        className="spa-hero"
        style={{ backgroundImage: `url(${spaImg})` }}
      >
        <div className="spa-overlay">
          <div className="spa-cards">

            <div className="spa-card">
              <h3>Full Body Massage</h3>
              <p>Relax your muscles and improve circulation.</p>
            </div>

            <div className="spa-card">
              <h3>Aromatherapy</h3>
              <p>Essential oils to calm your mind.</p>
            </div>

            <div className="spa-card">
              <h3>Steam Bath</h3>
              <p>Detox and refresh your skin.</p>
            </div>

            <div className="spa-card">
              <h3>Facial Treatment</h3>
              <p>Glow and rejuvenate your face.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
