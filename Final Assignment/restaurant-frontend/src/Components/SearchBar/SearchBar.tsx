import React, { useEffect, useState } from "react";
import { restaurant } from "../../Types/restaurantTypes";
import { MenuItems } from "../../Types/menuTypes";
import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../../Redux/Selectors/restaurantsSelectors";

type inputSearch = {
  setSearchResults: Function;
  searchItems: restaurant[] | MenuItems[];
};

const SearchBar = (props: inputSearch) => {
  const [searchTerm, setSearchTerm] = useState("");
  const AllRestaurants = useSelector(selectAllRestaurants);
  const [newResults, setNewResults] = useState<restaurant[] | MenuItems[]>([]);

  useEffect(() => {
    setNewResults(() => {
      if (
        Array.isArray(props.searchItems) &&
        props.searchItems[0] &&
        "data" in props.searchItems[0]
      ) {
        const filteredData = (props.searchItems as restaurant[]).filter(
          (item) => {
            const name = item.data.name.toLowerCase();
            return name.includes(searchTerm.toLowerCase().trim());
          }
        );
        return filteredData;
      } else if (
        Array.isArray(props.searchItems) &&
        props.searchItems[0] &&
        "card" in props.searchItems[0]
      ) {
        const filteredData = (props.searchItems as MenuItems[]).filter(
          (item) => {
            const name = item.card.info.name.toLowerCase();
            return name.includes(searchTerm.toLowerCase().trim());
          }
        );
        return filteredData;
      }
      return [];
    });
  }, [searchTerm, AllRestaurants, props.searchItems]);

  useEffect(() => {
    props.setSearchResults(newResults);
  }, [props, newResults]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
