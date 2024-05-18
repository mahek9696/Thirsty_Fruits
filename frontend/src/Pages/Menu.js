import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProducts from "../MyComponent/AllProducts";
import { addCartItem } from "../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };
  return (
    <div className=" p-2 md:p-4">
      <div className="w-full max-w-4xl  m-auto md:flex bg-white ">
        <div className=" max-w-sm p-7 overflow-hidden w-full">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col pt-20 pl-10 gap-4 p-4 ">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-2xl">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className=" font-bold">
            <span className="text-red-500">₹ </span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            {/* <button className="bg-yellow-400 hover:bg-yellow-500 min-w-[100px] min-h-[30px] rounded ">
              Buy
            </button> */}
            <button
              onClick={handleAddCartProduct}
              className="bg-yellow-400 hover:bg-yellow-500 min-w-[100px] rounded "
            >
              Add Cart
            </button>
          </div>
          <div className="gap-4">
            <p className="text-slate-500">Description :</p>

            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProducts heading={"Related Products"} />
    </div>
  );
};

export default Menu;
