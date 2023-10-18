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
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/Slices/favoriteSlice";
import { selectFavorite } from "../../Redux/Selectors/favSelector";
import constants from "../../Utilities/Constansts/lableConstancts.json";
import RestaurantSkeleton from "./Components/Skeleton/Index";

type resData = {
  MenuItems: MenuItems[];
  restaurant: restaurant[];
};

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState<null | resData>(null);
  const [items, setItems] = useState<MenuItems[]>([]);
  const [isFav, setIsFav] = useState<boolean>(false);
  const param = useParams();
  const dispatch = useDispatch();
  const favRestaurants = useSelector(selectFavorite);

  const { id } = param;

  useEffect(() => {
    const fetchRestaurantData = async () => {
      setRestaurantData(await getRestaurant(+id!));
    };

    fetchRestaurantData();
  }, [id]);

  useEffect(() => {
    const checkFav = favRestaurants.favRestaurants.some((item) => {
      return item.data.id === restaurantData?.restaurant[0].data.id;
    });

    setIsFav(checkFav);
    console.log(favRestaurants);
  }, [favRestaurants, restaurantData?.restaurant]);

  const handleChange = (filteredData: MenuItems[]) => {
    setItems(filteredData);
  };

  const handleAddToFav = () => {
    isFav || dispatch(actions.addToFavorite(restaurantData?.restaurant[0]));
    isFav &&
      dispatch(actions.removeFromFavorite(restaurantData?.restaurant[0]));
  };

  return (
    <>
      {restaurantData ? (
        <div>
          {restaurantData && (
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
                    <b>{constants.restaurantDetails.rating}:</b>{" "}
                    {restaurantData?.restaurant[0]?.data?.avgRating} ⭐
                  </p>
                  <p>
                    <b>{constants.restaurantDetails.availability}:</b>{" "}
                    {restaurantData?.restaurant[0]?.data?.availability
                      ? "In stock"
                      : "Out of stock"}
                  </p>
                  <p>
                    <b>{constants.restaurantDetails.restaurantCode}:</b> #
                    {restaurantData?.restaurant[0]?.data?.id}
                  </p>
                  <p>
                    <b>{constants.restaurantDetails.address}:</b>{" "}
                    {restaurantData?.restaurant[0]?.data?.address}
                  </p>
                  <div className={styles.actionBtns}>
                    <button onClick={handleAddToFav}>
                      {isFav
                        ? constants.restaurantDetails.removeFavorite
                        : constants.restaurantDetails.addToFavorite}
                    </button>
                    {/* <button onClick={handleShowFav}>Add to Cart</button> */}
                  </div>

                  <div className={styles.shareSection}>
                    <b>Share Link:</b>
                    <img src={whatsapp} alt="" className={styles.shareIcons} />
                    <img src={facebook} alt="" className={styles.shareIcons} />
                    <img src={skype} alt="" className={styles.shareIcons} />
                    <img src={instagram} alt="" className={styles.shareIcons} />
                    <img src={twitter} alt="" className={styles.shareIcons} />
                  </div>
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
                    <div
                      className={styles.menuItems}
                      key={menuItem.card.info.id}
                    >
                      <MenuItem menuItem={menuItem} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <RestaurantSkeleton />
      )}
    </>
  );
};

export default Restaurant;
