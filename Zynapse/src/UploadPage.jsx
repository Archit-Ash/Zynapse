import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Cropper } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "./style/UploadPage.css";
import uploadIcon from "./assets/uploadicon.png";
import axios from "axios";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    blood_group: "",
    age: "",
  });
  const cropperRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setCroppedImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.blood_group ||
      !formData.age
    ) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
  
    if (!image) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
  
    if (cropperRef.current) {
      const canvas = cropperRef.current.getCanvas();
      canvas.toBlob(async (blob) => {
        const croppedFile = new File([blob], "cropped-image.png", {
          type: "image/png",
        });
  
        const data = new FormData();
        data.append("image", croppedFile);
        data.append("name", formData.name);
        data.append("phone", formData.phone);
        data.append("blood_group", formData.blood_group);
        data.append("age", formData.age);
        console.log("Form Data:", data);
  
        try {
          const response = await axios.post("http://localhost:8000/upload/", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          console.log("Server Response:", response.data);
  
          navigate("/result", {
            state: {
              cloudinary_url: response.data.cloudinary_url,
              prediction: response.data.prediction,
              confidence: response.data.confidence,
            },
          });
  
        } catch (err) {
          console.error("Upload failed:", err);
        }
      }, "image/png");
    }
  };
  

  const handleReset = () => {
    setImage(null);
    setCroppedImage(null);
    document.getElementById("choosefile").value = null;
    setShowPreview(false);
  };

  return (
    <>
      <div className="uploadFormContainer">
        <form>
          <form>
            <label className="formLabel">
              Name:
              <input
                className="formValues"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </label>

            <label className="formLabel">
              Phone:
              <input
                className="formValues"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                pattern="[0-9]{10}"
                title="Phone number should be 10 digits"
                required
              />
            </label>

            <label className="formLabel">
              Blood Group:
              <select
                className="formValues"
                name="blood_group"
                value={formData.blood_group}
                onChange={(e) =>
                  setFormData({ ...formData, blood_group: e.target.value })
                }
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>

            <label className="formLabel">
              Age:
              <input
                className="formValues"
                type="number"
                name="age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                min="0"
                max="110"
                required
              />
            </label>
          </form>
        </form>
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
                <span
                  className="close-btn"
                  onClick={() => setShowPreview(false)}
                >
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
            <p>Fill All Fields Properly</p>
            <button onClick={() => setShowToast(false)}>✕</button>
          </div>
        )}
      </div>
      <h1>hello</h1>
    </>
  );
};

export default UploadPage;
