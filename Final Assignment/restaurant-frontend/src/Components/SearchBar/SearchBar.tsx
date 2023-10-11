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
  const [newResults, setNewResults] = useState(AllRestaurants);

  useEffect(() => {
    setNewResults(() => {
      const filteredData = AllRestaurants.filter((item) => {
        const name = item.data.name.toLowerCase();
        return name.includes(searchTerm.toLowerCase().trim());
      });

      return filteredData;
    });
  }, [searchTerm, AllRestaurants]);

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
