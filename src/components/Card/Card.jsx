import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpeg";
import img4 from "../../../public/images/img4.jpg";
import { GiBookPile } from "react-icons/gi";
import { RiCalendarTodoFill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { FaLink } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

import "./Card.css";
// import { useState } from "react";
const Card = ({ openModal, filesCount }) => {
  //   const [fileCount, setFileCount] = useState(0);

  const handleUploadClick = () => {
    // onUpload(setFileCount);
    console.log("modal is working");
  };
  return (
    <div className="card">
      <div className="card-top common-flex">
        <div className="common-flex">
          <img className="card-profile-img" src={img1} alt="" />
          <span className="card-title">Client Name</span>
        </div>
        <div className="common-flex">
          <img className="card-profile-img" src={img2} alt="" />
          <span className="card-title">steven smith</span>
        </div>
      </div>

      <div className="card-middle common-flex">
        <div className="common-flex">
          <GiBookPile />
          <span className="text-gray">Lorem ipsum dolor sit amet...</span>
        </div>
        <div className="common-flex complete-task">
          <RiCalendarTodoFill />
          <div className="">1/2</div>
        </div>
      </div>

      <div className="card-bottom">
        <img className="card-profile-img" src={img3} alt="" />
        <img className="card-profile-img" src={img4} alt="" />
        <div>
          <span>12+</span>
        </div>
        <div className="common-flex">
          <TiMessages />
          <span>15</span>
        </div>
        <div className="common-flex">
          <div onClick={openModal}>
            <FaLink />
          </div>
          <span>{filesCount}</span>
        </div>
        <div className="common-flex">
          <MdOutlineDateRange />
          <span>30-12-2024</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
