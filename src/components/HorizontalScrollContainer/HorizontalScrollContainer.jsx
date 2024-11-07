import Card from "../Card/Card";
import "./HorizontalScrollContainer.css";

const HorizontalScrollContainer = ({ onUpload, openModal, filesCount }) => {
  const newArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="horizontal-card-container">
      {newArray.map((idx) => (
        <div key={idx} className="cards-container">
          <div className="ptc-container">
            <div className="progressbar-container">
              <div
                className="progress-bar"
                style={{
                  width: "10%",
                  backgroundColor:
                    idx === 1
                      ? "#ef2129"
                      : idx === 2
                      ? "#45A8F9"
                      : idx === 3
                      ? "#ffce08"
                      : "",
                  display: idx > 3 ? "none" : "block", // Removed `${}`
                }}
              ></div>
              <p className="progress-title">
                {idx === 1
                  ? "Incomplete"
                  : idx === 2
                  ? "To Do"
                  : idx === 3
                  ? "Doing"
                  : idx === 4
                  ? "Under Review"
                  : idx === 5
                  ? "Completed"
                  : idx === 6
                  ? "Overdue"
                  : ""}
              </p>
            </div>
            <div className="task-counter">
              <span>0</span>
            </div>
          </div>
          <div className="vertical-scrollbar-container">
            {newArray.map((idx) => (
              <Card
                key={idx}
                onUpload={onUpload}
                openModal={openModal}
                filesCount={filesCount}
              ></Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollContainer;
