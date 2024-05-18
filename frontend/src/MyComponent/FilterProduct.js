import React from "react";
import { FiFilter } from "react-icons/fi";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-5 bg-yellow-400 rounded-full cursor-pointer ${
          isActive && "bg-yellow-600"
        }`}
      >
        <FiFilter />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
