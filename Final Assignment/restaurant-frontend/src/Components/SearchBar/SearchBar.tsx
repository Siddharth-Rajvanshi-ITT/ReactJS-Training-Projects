import React, { useEffect, useState } from "react";
import { restaurant } from "../../Views/Home/Types/restaurantTypes";
import { MenuItems } from "../../Views/RestaurantPage/Types/menuTypes";
import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../../Redux/Selectors/restaurantsSelectors";
import styles from "./SearchBar.module.css";

type inputSearch = {
  setSearchResults: Function;
  searchItems: restaurant[] | MenuItems[];
};

const SearchBar = (props: inputSearch) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const AllRestaurants = useSelector(selectAllRestaurants);
  const [newResults, setNewResults] = useState<restaurant[] | MenuItems[]>([]);
  const [veg, setVeg] = useState<boolean>(false);
  const [nonVeg, setNonVeg] = useState<boolean>(false);

  useEffect(() => {
    setNewResults(() => {
      if (
        Array.isArray(props.searchItems) &&
        props.searchItems[0] &&
        "data" in props.searchItems[0]
      ) {
        let filteredData = (props.searchItems as restaurant[]).filter(
          (item) => {
            const name = item.data.name.toLowerCase();
            return name.includes(searchTerm.toLowerCase().trim());
          }
        );

        if (veg) {
          filteredData = filteredData.filter((item) => {
            return item.data.veg;
          });
          console.log(filteredData);
        }

        if (nonVeg) {
          filteredData = filteredData.filter((item) => {
            return !item.data.veg;
          });
          console.log(filteredData);
        }

        return filteredData;
      } else if (
        Array.isArray(props.searchItems) &&
        props.searchItems[0] &&
        "card" in props.searchItems[0]
      ) {
        let filteredData = (props.searchItems as MenuItems[]).filter((item) => {
          const name = item.card.info.name.toLowerCase();
          return name.includes(searchTerm.toLowerCase().trim());
        });

        if (veg) {
          filteredData = filteredData.filter((item) => {
            return item.card.info.isVeg;
          });
          console.log(filteredData);
        }

        if (nonVeg) {
          filteredData = filteredData.filter((item) => {
            return !item.card.info.isVeg;
          });
          console.log(filteredData);
        }

        return filteredData;
      }
      return [];
    });
  }, [searchTerm, AllRestaurants, props.searchItems, veg, nonVeg]);

  useEffect(() => {
    props.setSearchResults(newResults);
  }, [props, newResults]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleVeg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVeg(!veg);
  };
  const handleNonVeg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNonVeg(!nonVeg);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleChange}
      />
      <label className={styles.category}>
        Veg <input type="checkbox" onChange={handleVeg} />
      </label>
      <label className={styles.category}>
        Non-Veg <input type="checkbox" onChange={handleNonVeg} />
      </label>
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchBar;
