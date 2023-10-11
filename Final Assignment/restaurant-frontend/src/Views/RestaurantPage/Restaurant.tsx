import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../Http-Services/getRestaurant";
import "./Restaurant.css";
import MenuItem from "./Components/MenuItems";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { MenuItems } from "../../Types/menuTypes";

type resData = {
  MenuItems: MenuItems[];
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

  console.log(restaurantData);
  console.log(restaurantData?.MenuItems);

  const handleChange = (filteredData: MenuItems[]) => {};

  return (
    <div>
      <SearchBar
        setSearchResults={handleChange}
        searchItems={restaurantData?.MenuItems!}
      />
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
    </div>
  );
};

export default Restaurant;
