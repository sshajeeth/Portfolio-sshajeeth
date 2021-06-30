import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

import SocialMedia from "../../components/socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
      
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Reach me at
          <div style={{marginTop:10}}>
          <SocialMedia />
          </div>
        
        </p>
      </Fade>
    </div>
  );
}
