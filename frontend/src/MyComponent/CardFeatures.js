import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeatures = ({ name, image, category, price, loading, id }) => {
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
    <div className="w-full md:min-w-[280px] min-w-[180px] bg-white hover:shadow-lg drop-shadow pl-4 pr-2 pt-4 md:pt-1 cursor-pointer justify-center items-center flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl">
      {image ? (
        <>
          <div className="h-29 w-1/2">
            <Link
              to={`/menu/${id}`}
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            >
              <img
                src={image}
                className="h-full object-cover w-full rounded h-96 md:h-auto md:w-48 md:rounded-none md:rounded"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <Link
              to={`/menu/${id}`}
              onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
            >
              <h3 className="font-semibold text-slate-600  tracking-tight capitalize text-lg whitespace-nowrap overflow-hidden">
                {name}
              </h3>
              <p className=" text-slate-500 font-medium">{category}</p>
              <p className=" font-bold">
                <span className="text-red-500">₹ </span>

                <span>{price}</span>
              </p>
            </Link>
            <button
              className="bg-yellow-400 p-1 my-2 mt-2 w-full rounded "
              onClick={handleAddCartProduct}
            >
              Add Cart
            </button>
          </div>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeatures;

{
  /* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */
}
