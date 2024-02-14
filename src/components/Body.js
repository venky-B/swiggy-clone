import React from "react";
import Search from "./Search";
import Restaurantcontainer from "./Restaurantcontainer";

const Body = () => {
  return (
    <div className=" m-10 flex flex-col gap-5">
      <Search />
      <Restaurantcontainer />
    </div>
  );
};

export default Body;
