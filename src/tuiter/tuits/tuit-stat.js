import React from "react";
import "./tutitsta.css";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
const TuitStats = ({ tuit = {} }) => {
  return (
    <div className="temp">
      <div className="column">
        <i className="fas fa-comment"></i> {tuit.replies}
      </div>
      <div className="column">
        <i className="fas fa-retweet"></i> {tuit.retuits}
      </div>
      <div className={`column ${tuit.liked ? "liked-icon" : ""}`}>
        <i className="fas fa-heart"></i> {tuit.likes}
      </div>
      <div className="column">
        <i class="fas fa-upload"></i>
      </div>
    </div>
  );
};

export default TuitStats;
