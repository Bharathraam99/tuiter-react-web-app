import React from "react";
import { useSelector } from "react-redux";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  const exp = useSelector((state) => state.explore);

  return (
    <ul className="list-group">
      {exp.map((explore) => (
        <TuitSummaryItem key={explore._id} tuit={explore} />
      ))}
    </ul>
  );
};
export default TuitSummaryList;
