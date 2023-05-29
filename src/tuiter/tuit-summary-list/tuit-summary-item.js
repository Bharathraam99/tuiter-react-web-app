import React from "react";
import "../tuitsummary.css"
const TuitSummaryItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "teslabklog.png",
  },
}) => {
  return (
    <li className="list-group-item borderprint explorecard">
      <div className="row">
        <div className="col-10">
          <div>
            {tuit.userName} . {tuit.time}
          </div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.title}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            height={70}
            className="float-end rounded-3"
            src={`../${tuit.image}`}
          />
        </div>
      </div><br></br>
    </li>
  );
};
export default TuitSummaryItem;
