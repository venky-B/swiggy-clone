import React from "react";
import { CLOUD_IMG } from "../utils/constants";

const Restaurantcard = (props) => {
  return (
    <div className="w-52 h-64 bg-slate-200 m-2  hover:cursor-pointer rounded-2xl overflow-hidden">
      <img
        src={CLOUD_IMG + props.imgId}
        alt={props.name}
        className=" w-full h-36 "
      />
      <h1>{props.name}</h1>
      <h2>{props.avgRating}</h2>

      <h3>20 min</h3>
    </div>
  );
};

export default Restaurantcard;
