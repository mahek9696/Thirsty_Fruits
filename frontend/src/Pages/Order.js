import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    amount: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, email, address, pincode } = data;
    if (name && email && address && pincode) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const orderRes = await fetchData.json();

      console.log(orderRes);
      toast(orderRes.message);
      if ((orderRes, alert)) {
        toast("Hooray Order noted ");
        navigate("/");
      }
      setData(() => {
        return {
          name: "",
          email: "",
          address: "",
          pincode: "",
          amount: "",
        };
      });
    } else {
      toast("Enter Required Fields");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white "
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="my-1">
          Name
        </label>
        <input
          type={"text"}
          id="name"
          name="name"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.name}
        />

        <label htmlFor="email" className="my-1">
          Email
        </label>
        <input
          type={"text"}
          id="email"
          name="email"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.email}
        />

        <label htmlFor="address" className="my-1">
          Address
        </label>
        <input
          type={"text"}
          id="address"
          name="address"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.address}
        />

        <label htmlFor="pincode" className="my-1">
          Pincode
        </label>
        <input
          type={"text"}
          id="pincode"
          name="pincode"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.pincode}
        />

        <label htmlFor="amount" className="my-1">
          Amount
        </label>
        <input
          type={"text"}
          id="amount"
          name="amount"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.amount}
        />

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
