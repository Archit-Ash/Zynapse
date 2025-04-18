import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "./style/UploadPage.css";
import uploadIcon from "./assets/uploadicon.png";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const cropperRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setCroppedImage(null);
  };

  const handleCrop = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      if (canvas) {
        const croppedURL = canvas.toDataURL("image/png");
        setCroppedImage(croppedURL);
        setShowPreview(true);
      }
    }
  };

  const handleSubmit = () => {
    if (!image) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      canvas.toBlob((blob) => {
        const croppedFile = new File([blob], "cropped-image.png", {
          type: "image/png",
        });
        navigate("/result", { state: { image: croppedFile } });
      });
    }
  };

  const handleReset = () => {
    setImage(null);
    setCroppedImage(null);
    document.getElementById("choosefile").value = null;
    setShowPreview(false);
  };

  return (
    <div>
      <input
        id="choosefile"
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />

      {!image && (
        <div id="labelcontainer">
          <label htmlFor="choosefile" className="custom-file-label">
            Upload Image
            <img src={uploadIcon} alt="upload" />
          </label>
        </div>
      )}

      {image && (
        <div id="previewimgcontainer">
          <Cropper
            ref={cropperRef}
            src={image}
            style={{ width: "100%", height: "400px" }}
            aspectRatio={1}
          />
        </div>
      )}

      <div id="buttoncontainer">
        <button id="btnhomepage" onClick={handleSubmit}>
          Submit
        </button>
        {image && (
          <>
            <button id="btnhomepage" onClick={handleCrop}>
              Preview
            </button>

            <button id="btnhomepage" onClick={handleReset}>
              Reset
            </button>
          </>
        )}
      </div>

      {showPreview && (
        <div id="modalcontainer">
          <div className="preview-modal">
            <div className="modal-header">
              <h3>Cropped Image Preview</h3>
              <span className="close-btn" onClick={() => setShowPreview(false)}>
                X
              </span>
            </div>
            <div id="croppedimg">
              <img src={croppedImage} alt="Cropped" />
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div id="custom-toast">
          <p>Upload image first</p>
          <button onClick={() => setShowToast(false)}>✕</button>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
