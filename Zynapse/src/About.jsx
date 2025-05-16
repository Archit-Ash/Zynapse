import React from "react";
import "./style/knowmore.css";

const About = () => {
  return (
    <div className="fullScreenContainer">
      <div className="infocontainer">
        <div className="infoBoard2">
          <div>
            <p className="infotext">About This Project</p>
            <p className="infosubtext">
              This web application was created as a part of our college project.
              It aims to demonstrate the application of machine learning in
              detecting brain tumors from MRI scans.
            </p>
            <p className="infosubtext">
              The platform is designed for academic purposes only and can
              classify brain MRIs into categories such as healthy, pituitary
              tumor, glioma, and meningioma using a trained CNN model.
            </p>
            <p className="infosubtext">
              It combines React for the frontend and FastAPI for the backend,
              forming a basic full-stack application suitable for demo and
              educational use.
            </p>
            <p className="infosubtext">
              We hope this project serves as a stepping stone toward further
              exploration in the field of AI in healthcare.
            </p>
            <p className="infosubtext">
              <strong>Team Members:</strong>
            </p>
            <ul
              className="infosubtext"
              style={{ paddingLeft: "20px", marginTop: "-10px" }}
            >
              <li>Arnav Srivastava</li>
              <li>Deeksha Gupta</li>
              <li>Archit Shukla</li>
            </ul>
            <p className="infosubtext">
              <strong>Project Mentor:</strong> Ms. Swati Tomar
            </p>
            <p className="infosubtext">
              We would like to thank our mentor for her guidance and support
              throughout the development process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
