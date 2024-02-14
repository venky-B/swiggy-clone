import React from "react";
import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Restaurantcontainer = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165167&lng=79.13249859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering and ternary operator

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap ">
      {resList.map((restaurant) => (
        <Restaurantcard
          key={restaurant.info.id}
          name={restaurant.info.name}
          avgRating={restaurant.info.avgRating}
          imgId={restaurant.info.cloudinaryImageId}
        />
      ))}
    </div>
  );
};

export default Restaurantcontainer;
