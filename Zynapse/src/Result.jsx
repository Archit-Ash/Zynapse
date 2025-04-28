import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;
  const formData = location.state?.formData;

  if (!image) {
    return <p>No image provided.</p>;
  }

  const imageUrl = URL.createObjectURL(image);

  return (
    <div style={{ color: "white", padding: "20px", backgroundColor: "#333" }}>
      <h2>Preview Image</h2>
      <img src={imageUrl} alt="Uploaded" width="300" />
      <br />
      <h3>Form Data:</h3>
      <ul>
        <li>
          <strong>Name:</strong> {formData?.name || "N/A"}
        </li>
        <li>
          <strong>Phone:</strong> {formData?.phone || "N/A"}
        </li>
        <li>
          <strong>Blood Group:</strong> {formData?.blood_group || "N/A"}
        </li>
        <li>
          <strong>Age:</strong> {formData?.age || "N/A"}
        </li>
      </ul>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        Go Back
      </button>
    </div>
  );
};

export default Result;
