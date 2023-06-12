import React from "react";
import "./tutitsta.css";
import { useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";

const TuitStats = ({ tuit = {} }) => {
  const dispatch = useDispatch();

  return (
    <div className="temp">
      <div className="column">
        <i className="fas fa-comment"></i> <span>{tuit.replies}</span>
      </div>
      <div className="column">
        <i className="fas fa-retweet"></i> <span>{tuit.retuits}</span>
      </div>
      <div className="column">
        <i
          className={`fas fa-heart ${tuit.liked ? "liked" : "not-liked"}`}
          onClick={() => {
            if (tuit.liked) {
              dispatch(
                updateTuitThunk({
                  ...tuit,
                  likes: tuit.likes - 1,
                  liked: false,
                })
              );
            } else {
              dispatch(
                updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })
              );
            }
          }}
        ></i>{" "}
        <span className="wd-colorblack">{tuit.likes}</span>
      </div>
      <div className="column">
        <i
          class="fas fa-thumbs-down"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
          }
        ></i>
        <span className="ms-2">{tuit.dislikes}</span>
      </div>
      <div className="column">
        <i class="fas fa-upload wd-movedown"></i>
      </div>
    </div>
  );
};

export default TuitStats;
