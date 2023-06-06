import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";
const TuitsList = () => {
  const { tuits } = useSelector((state) => state.tuits);

  return (
    <ul className="list-group">
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
