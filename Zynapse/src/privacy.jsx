import React from "react";
import "./style/knowmore.css";

const PrivacyPolicy = () => {
  return (
    <div className="fullScreenContainer">
      <div className="infocontainer">
        <div className="infoBoard2">
          <div>
            <p className="infotext">Privacy Policy</p>
            <p className="infosubtext">
              your privacy is of utmost importance to us. This Privacy Policy
              outlines how we collect, use, and protect your personal
              information when you use our brain tumor detection platform.
            </p>
            <p className="infosubtext">
              <strong>Information Collection:</strong> We collect personal
              information such as your name, email, and medical images only when
              you voluntarily provide them through our platform. We do not
              collect any information without your consent.
            </p>
            <p className="infosubtext">
              <strong>Use of Information:</strong> The information you provide
              is used solely for providing diagnostic assistance, improving our
              machine learning models, and communicating important updates. We
              do not sell or share your personal data with third parties.
            </p>
            <p className="infosubtext">
              <strong>Data Security:</strong> We implement industry-standard
              security measures, including encryption and secure storage, to
              protect your data from unauthorized access, alteration, or
              disclosure.
            </p>
            <p className="infosubtext">
              <strong>Data Retention:</strong> Your data is retained only as
              long as necessary to provide services or comply with legal
              obligations. You may request deletion of your personal data at any
              time by contacting us.
            </p>
            <p className="infosubtext">
              <strong>Your Rights:</strong> You have the right to access,
              correct, or delete your personal information. You may also opt-out
              of communications and withdraw consent at any time.
            </p>
            <p className="infosubtext">
              <strong>Changes to This Policy:</strong> We may update this
              Privacy Policy periodically. Changes will be communicated via our
              platform or email. Continued use of our services constitutes
              acceptance of the updated policy.
            </p>
            <p className="infosubtext">
              If you have any questions or concerns about your privacy, please
              contact us .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
