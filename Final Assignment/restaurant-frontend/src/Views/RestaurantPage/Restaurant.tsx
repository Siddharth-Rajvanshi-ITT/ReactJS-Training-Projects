import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurant } from "../../Http-Services/getRestaurant";
import styles from "./Restaurant.module.css";
import MenuItem from "./Components/MenuItems";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { MenuItems } from "./Types/menuTypes";
import { restaurant } from "../Home/Types/restaurantTypes";
import whatsapp from "./../../Assets/Images/Icons/whatsapp.svg";
import facebook from "./../../Assets/Images/Icons/facebook.svg";
import twitter from "./../../Assets/Images/Icons/twitter.svg";
import skype from "./../../Assets/Images/Icons/skype.svg";
import instagram from "./../../Assets/Images/Icons/instagram.svg";

type resData = {
  MenuItems: MenuItems[];
  restaurant: restaurant[];
};

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState<null | resData>(null);
  const [items, setItems] = useState<MenuItems[]>([]);
  const param = useParams();

  const { id } = param;

  useEffect(() => {
    const fetchRestaurantData = async () => {
      setRestaurantData(await getRestaurant(+id!));
    };

    fetchRestaurantData();
  }, [id]);

  const handleChange = (filteredData: MenuItems[]) => {
    setItems(filteredData);
  };

  return (
    <div>
      <div className={styles.restaurantcontainer}>
        <div className={styles.detailsContainer}>
          <div>
            <img
              className={styles.restaurantImg}
              src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurantData?.restaurant[0]?.data?.cloudinaryImageId}`}
              alt=""
            />
          </div>
          <div className={styles.details}>
            <h1>{restaurantData?.restaurant[0]?.data?.name}</h1>
            <p>
              <b>Rating:</b> {restaurantData?.restaurant[0]?.data?.avgRating} ⭐
            </p>
            <p>
              <b>Availability:</b>{" "}
              {restaurantData?.restaurant[0]?.data?.availability
                ? "In stock"
                : "Out of stock"}
            </p>
            <p>
              <b>Restaurant Code:</b> #{restaurantData?.restaurant[0]?.data?.id}
            </p>
            <p>
              <b>Address:</b> {restaurantData?.restaurant[0]?.data?.address}
            </p>
            <div className={styles.actionBtns}>
              <button>Add to Favorite</button>
              <button>Add to Cart</button>
            </div>
            <p>
              <div className={styles.shareSection}>
                <b>Share Link:</b>
                <img src={whatsapp} alt="" className={styles.shareIcons} />
                <img src={facebook} alt="" className={styles.shareIcons} />
                <img src={skype} alt="" className={styles.shareIcons} />
                <img src={instagram} alt="" className={styles.shareIcons} />
                <img src={twitter} alt="" className={styles.shareIcons} />
              </div>
            </p>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <h1>Menu Items</h1>
          <SearchBar
            setSearchResults={handleChange}
            searchItems={restaurantData?.MenuItems!}
          />
        </div>
        <div className={styles.menuContainer}>
          {items.map((menuItem) => {
            return (
              <div className={styles.menuItems} key={menuItem.card.info.id}>
                <MenuItem menuItem={menuItem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
