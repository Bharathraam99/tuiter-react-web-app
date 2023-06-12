import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";
const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit) => (
        <TuitItem
          key={tuit._id}
          userName={tuit.userName}
          title={tuit.title}
          time={tuit.time}
          image={tuit.image}
          liked={tuit.liked}
          replies={tuit.replies}
          retuits={tuit.retuits}
          likes={tuit.likes}
          handle={tuit.handle}
          tuit={tuit}
        />
      ))}
    </ul>
  );
};
export default TuitsList;
