import React from "react";
import { useLocation } from "react-router-dom";
import "./style/result.css";

const Result = () => {
  const location = useLocation();
  const imageUrl = location.state?.cloudinary_url;
  const prediction = location.state?.prediction;
  const confidence = location.state?.confidence;

  if (!imageUrl || !prediction) {
    return <p>No results to display. Please go back and upload an image.</p>;
  }

  const result = prediction.toLowerCase();
  let returnResult = null;

  switch (result) {
    case "no tumor":
      returnResult = (
        <>
          <div className="resultTitle green">✅ No Tumor Detected</div>
          <div className="confidence">Confidence Rate: {(confidence * 100).toFixed(2)}%</div>
          <p>Your scan shows no signs of a tumor. This is excellent news!</p>
          <p>Continue with regular checkups and stay proactive about your health.</p>
        </>
      );
      break;

    case "meningioma":
      returnResult = (
        <>
          <div className="resultTitle red">⚠ Meningioma Detected</div>
          <div className="confidence">Confidence Rate: {(confidence * 100).toFixed(2)}%</div>
          <p>Meningiomas arise from the meninges and are usually benign.</p>
          <p>Consult a specialist to evaluate and track the tumor.</p>
        </>
      );
      break;

    case "glioma":
      returnResult = (
        <>
          <div className="resultTitle red">⚠ Glioma Detected</div>
          <div className="confidence">Confidence Rate: {(confidence * 100).toFixed(2)}%</div>
          <p>Gliomas arise from glial cells. Treatment varies by severity.</p>
          <p>Follow up with a neurologist or oncologist for care.</p>
        </>
      );
      break;

    case "pituitary tumor":
      returnResult = (
        <>
          <div className="resultTitle red">⚠ Pituitary Tumor Detected</div>
          <div className="confidence">Confidence Rate: {(confidence * 100).toFixed(2)}%</div>
          <p>Pituitary tumors can disrupt hormones and cause symptoms.</p>
          <p>Consult an endocrinologist or neurosurgeon for treatment advice.</p>
        </>
      );
      break;

    default:
      returnResult = (
        <>
          <div className="resultTitle">Unknown Result</div>
          <p>We're unable to determine the diagnosis. Please re-upload the image.</p>
        </>
      );
  }

  return (
    <div className="flexResultContainer">
      <img id="uploadedImage" src={imageUrl} alt="Uploaded MRI" />
      <div>{returnResult}</div>
    </div>
  );
};

export default Result;