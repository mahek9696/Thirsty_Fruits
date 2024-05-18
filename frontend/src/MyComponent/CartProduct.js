import React from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();
  return (
    // <div className="bg-white gap-2 flex flex-justify items-center md:p-2 w-full ">
    <div className="bg-slate-200 md:p-2 flex gap-4 rounded border border-white ">
      {/* <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} className="h-28 w-36 object-cover" />
      </div> */}
      <div className="w-40 bg-white rounded overflow-hidden">
        <img
          src={image}
          className="md:p-2 p-7 h-full w-full min-h-[120px] min-w-[120px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 w-full ml-auto ">
        <div className="flex justify-between ">
          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            onClick={() => dispatch(deleteCartItem(id))}
            className="text-2xl cursor-pointer text-slate-700 hover:text-red-500"
          >
            <RiDeleteBin5Line />
          </div>
        </div>
        <p className=" text-slate-500 font-medium capitalize">{category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500">₹ </span>
          <span>{price}</span>
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-3 pt-3 items-center">
            <button
              onClick={() => dispatch(increaseQty(id))}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded "
            >
              <TbPlus />
            </button>
            <p className="font-semibold"> - {qty} - </p>
            <button
              onClick={() => dispatch(decreaseQty(id))}
              className="bg-slate-300 hover:bg-slate-400 p-1 rounded "
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p>
              <span className="text-red-500">₹ </span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CartProduct;
