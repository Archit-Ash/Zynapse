import React from "react";
import "./style/knowmore.css";

const TermsAndConditions = () => {
  return (
    <div className="fullScreenContainer">
      <div className="infocontainer">
        <div className="infoBoard2">
          <div>
            <p className="infotext">Terms & Conditions</p>
            <p className="infosubtext">
              By using this platform, you agree to the following terms:
            </p>

            <p className="infosubtext">
              • This tool is intended for educational and demonstration purposes
              only.
            </p>
            <p className="infosubtext">
              • You are responsible for the data you upload, and you confirm
              that you have the right to use and share it.
            </p>
            <p className="infosubtext">
              • You will not use the platform for any unlawful or unethical
              activity.
            </p>
            <p className="infosubtext">
              • All outputs are generated using a machine learning model and may
              not be fully accurate.
            </p>
            <p className="infosubtext">
              • The development team is not responsible for any decisions made
              based on the results from this platform.
            </p>

            <p className="infosubtext">
              If you do not agree with these terms, please refrain from using
              the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
