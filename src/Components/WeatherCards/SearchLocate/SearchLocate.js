import React from "react";
import searcher from "./../../../img/Icons/Orion_find.svg";
import "./search.css";
const SearchLocate = () => {
  return (
    <div class="searchLocate">
      <form>
        <input
          className="searchLocate_text"
          type="text"
          placeholder="Искать здесь..."
        />
        <button className="searchLocate_submit" type="submit">
          <img src={searcher} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchLocate;
