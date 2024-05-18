import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";

const HomeCard2 = ({ name, image, category, price, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
    //alert("OK");
  };
  return (
    <div className="bg-white shadow-md p-2 rounded-lg min-w-[150px] cursor-pointer ">
      {name ? (
        <>
          <div className="w-40 min-h-[150px] min-w-[150px] p-3 ">
            <Link
              to={`/menu/${id}`}
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            >
              <img src={image} className="h-full w-full" />
            </Link>
          </div>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              {name}
            </h3>
            <p className="text-center text-slate-500 font-medium">{category}</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹ </span>
              <span>{price}</span>
            </p>
          </Link>
          <div className="flex justify-center items-center w-full">
            <button
              className="bg-yellow-400 py-1 my-2 mt-2 rounded justify-center items-center w-2/3"
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[170px]">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard2;
