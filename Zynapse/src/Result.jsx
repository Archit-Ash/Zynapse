import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;

  if (!image) {
    return <p>No image provided.</p>;
  }

  const imageUrl = URL.createObjectURL(image);

  return (
    <div>
      <h2>Preview Image</h2>
      <img src={imageUrl} alt="Uploaded" width="300" />
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Result;
