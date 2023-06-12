import React from "react";
import "../tuitsummary.css";
import TuitStats from "./tuit-stat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import { BsXLg } from "react-icons/bs";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = ({
  tuit = {
    topic: "Space",
    userName: "@spacex",
    time: "2h",
    title:
      "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "teslaicon.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    dislikes: 499,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    // dispatch(deleteTuit(id));
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item borderprint explorecard">
      <div className="row">
        <div className="col-auto">
          <img
            width={70}
            height={70}
            className="rounded-circle float-end"
            src={`../${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <span className="fw-bolder">{tuit.userName}</span>{" "}
            <FontAwesomeIcon icon={faCircleCheck} /> {tuit.handle} . {tuit.time}
            <button
              className="bi bi-x-lg float-end transparent-button"
              onClick={() => deleteTuitHandler(tuit._id)}
            >
              <BsXLg />
            </button>
          </div>
          <div>{tuit.tuit}</div>
          <br />
          <div>
            <TuitStats tuit={tuit}></TuitStats>
          </div>
        </div>
      </div>
      <br></br>
    </li>
  );
};
export default TuitItem;
