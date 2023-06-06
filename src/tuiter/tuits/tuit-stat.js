import React from "react";
import "./tutitsta.css";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
const TuitStats = ({ tuit = {} }) => {
  return (
    <div className="temp">
      <div className="column">
        <i className="fas fa-comment"></i> <span>{tuit.replies}</span>
      </div>
      <div className="column">
        <i className="fas fa-retweet"></i> <span>{tuit.retuits}</span>
      </div>
      <div className={`column ${tuit.liked ? "liked-icon" : ""}`}>
        <i className="fas fa-heart"></i> <span className="wd-colorblack">{tuit.likes}</span>
      </div>
      <div className="column">
        <i class="fas fa-upload wd-movedown"></i>
      </div>
    </div>
  );
};

export default TuitStats;
