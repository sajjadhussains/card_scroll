import { useState } from "react";
import "./Modal.css";

const Modal = ({
  show,
  onClose,
  setFiles,
  files,
  filesInfo,
  setTrue,
  isTrue,
}) => {
  const [previewFiles, setPreviewFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    // Create preview of the files selected
    const filePreviews = uploadedFiles.map((file) => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setPreviewFiles((prevPreviews) => [...prevPreviews, ...filePreviews]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (files.length === 0) {
      alert("Please select files to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Files uploaded successfully!");
        setTrue(!isTrue);
        setPreviewFiles([]);
      } else {
        alert("Failed to upload files.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("An error occurred while uploading files.");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Upload Files</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose Files
          </label>
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleFileChange}
          />
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>

        {/* File Previews */}
        {previewFiles.length > 0 && (
          <div className="file-preview">
            <h3>Preview:</h3>
            <ul>
              {previewFiles.map((file, index) => (
                <li key={index} className="file-item">
                  <strong>{file.name}</strong>
                  <br />
                  <img
                    src={file.url}
                    alt={file.name}
                    className="preview-image"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* File List from the Database */}
        <div className="file-info">
          {filesInfo.length > 0 ? (
            <ul>
              {filesInfo.map((file, index) => (
                <li key={index}>{file.filename}</li>
              ))}
            </ul>
          ) : (
            <p>No files available</p>
          )}
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
