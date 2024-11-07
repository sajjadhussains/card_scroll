import HorizontalScrollContainer from "./components/HorizontalScrollContainer/HorizontalScrollContainer";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [filesInfo, setFilesInfo] = useState([]);
  const [isTrue, setTrue] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/api/files")
      .then((res) => res.json())
      .then((data) => {
        setFilesInfo(data);
      });
  }, [isTrue]);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="app-container">
      <HorizontalScrollContainer
        onUpload={openModal}
        openModal={openModal}
        filesCount={filesInfo.length}
      ></HorizontalScrollContainer>
      <Modal
        show={showModal}
        onClose={closeModal}
        setFiles={setFiles}
        files={files}
        filesInfo={filesInfo}
        setTrue={setTrue}
        isTrue={isTrue}
      />
    </div>
  );
}

export default App;
