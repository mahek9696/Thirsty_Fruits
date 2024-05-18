import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../MyComponent/CartProduct";
import empty from "../Media/empty.gif";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const handlepayment = () => {
    // toast("Hooray ! Payments Sucedded");
    navigate("/Order");
  };

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600 pb-5">
          Your Cart Item's
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items */}
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* total cart items */}
            <div className="w-full max-w-md ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg font-bold">
                Final Bill
              </h2>
              <div className="flex w-full p-3 py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full p-3 py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹ </span>
                  {totalPrice}
                </p>
              </div>
              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white"
                onClick={handlepayment}
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* <h2 className="text-lg md:text-2xl font-bold flex justify-center items-center text-slate-600 pb-5">
              Your Cart Item's
            </h2> */}
            <div className="flex w-full  bg-white justify-center items-center flex-col">
              <br />
              <br />
              <img src={empty} className="w-full max-w-sm " />
              <p className="text-slate-500 text-3xl font-bold pt-8">
                Cart is Empty !!!
                <br />
                <br />
                {/* <br /> */}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
