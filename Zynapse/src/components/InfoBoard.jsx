import React from "react";
import "../style/Homepage.css";
import { Link } from "react-router-dom";

import uiuia from "../assets/brainimg.png";
const InfoBoard = () => {
  return (
    <div id="infocontainer">
      <div id="infoBoard">
        <div>
          <p id="infotext">Welcome To Zynapse</p>
          <p id="infosubtext">
            The early detection of brain tumors is crucial for improving patient
            outcomes and ensuring timely treatment. Traditional diagnostic
            methods, while effective, often rely on the manual interpretation of
            MRI scans, which can be both time-consuming and susceptible to human
            error. Machine learning (ML) models bring a revolutionary
            advancement to this process by automating the analysis of medical
            images. These models are trained on extensive datasets, learning to
            recognize complex patterns and anomalies in MRI scans that may be
            difficult for the human eye to detect. By continuously improving
            through exposure to more data, the ML model becomes increasingly
            accurate and efficient in identifying potential tumors. This level
            of precision not only speeds up the diagnosis but also empowers
            healthcare professionals to make more informed decisions, enabling
            early intervention and ultimately improving patient prognosis. The
            integration of ML in brain tumor detection represents a critical
            step toward modernizing healthcare, making it faster, more reliable,
            and accessible.
          </p>

          <div id="btncontainer">
            <Link to="/upload">
              <button id="btnhomepage">CHECK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="infoboardimg">
        <img id="imginfo" src={uiuia} />
      </div>
    </div>
  );
};

export default InfoBoard;
