// src/Up/UploadImage.js
import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }
    // Here you can send the file to your backend with fetch/axios
    alert(`Uploading: ${file.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>

      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h4>Preview:</h4>
          <img
            src={preview}
            alt="preview"
            style={{ width: "200px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
