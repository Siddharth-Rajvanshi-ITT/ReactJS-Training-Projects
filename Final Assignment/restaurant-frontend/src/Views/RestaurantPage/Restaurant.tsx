import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../Http-Services/getRestaurant";
import "./Restaurant.css";
import MenuItem from "./Components/MenuItems";

type resData = {
  MenuItems: {
    card: {
      info: {
        name: string;
        id: number;
      };
    };
  }[];
  restaurant: {
    data: {
      name: string;
      id: number;
    };
  }[];
};

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState<null | resData>(null);
  const param = useParams();

  const { id } = param;

  useEffect(() => {
    const fetchRestaurantData = async () => {
      setRestaurantData(await getRestaurant(+id!));
    };

    fetchRestaurantData();
  }, [id]);

  return (
    <div className="restaurantcontainer">
      <h1>{restaurantData?.restaurant[0]?.data?.name}</h1>
      <p>ID: {restaurantData?.restaurant[0]?.data?.id}</p>
      {restaurantData?.MenuItems.map((menuItem) => {
        return (
          <div className="menuItems" key={menuItem.card.info.id}>
            <MenuItem menuItem={menuItem} />
          </div>
        );
      })}
    </div>
  );
};

export default Restaurant;
