import React, { useEffect, useState } from "react";
// import gif from "../Media/gif2.gif";
import img from "../Media/delivery12.png";
import HomeCard from "../MyComponent/HomeCard";
import { useSelector } from "react-redux";
import CardFeatures from "../MyComponent/CardFeatures";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
// import FilterProduct from "../MyComponent/FilterProduct";
// import HomeCard2 from "../MyComponent/HomeCard2";
import AllProducts from "../MyComponent/AllProducts";
import Contact from "../Pages/Contact";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  //console.log(productData);
  const homeProductCartList = productData.slice(8, 12);
  const homeProductCartListDryFruits = productData.filter(
    (el) => el.category === "dryFruits" || "Fruits",
    []
  );
  //console.log(homeProductCartListDryFruits);
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeatures = new Array(10).fill(null);

  const slideProductRef = useRef();

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4 ">
      {/* left  section */}
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 w-36 px-2 items-center rounded-full">
            <p className="text-sm text-red-500 font-medium">Bike Delivery </p>
            <img src={img} className="h-7" />
          </div>
          <h2 className="text-6xl md:text-7xl  from-rose-400 via-rose-700 to-rose-600 bg-gradient-to-r bg-clip-text text-transparent font-sans font-bold py-3">
            Being Healthy Isn't A Goal{" "}
            <span className="text-orange-900">
              <br />
              "It's Way Of Living"
            </span>
          </h2>
          <p className="py-3 text-base">
            <p className="text-gray-800">
              When it comes to healthy snacking options, dry fruits are a
              popular
            </p>
            <p className="text-gray-600">
              {" "}
              choice for people of all ages. Not only are they delicious, but
              they
            </p>
            <p className="text-gray-400">
              are also packed with nutrients and can help satisfy your hunger
              cravings.
            </p>
          </p>
          <br />
          {/* <p className="flex items-center">Quality builds here</p> */}
          <button className="font-bold text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br text-slate-100 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        {/* right section */}
        <div className="flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading...."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Quality builds here
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrFormPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrFormNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListDryFruits[0]
            ? homeProductCartListDryFruits.map((el) => {
                return (
                  <CardFeatures
                    key={el._id + "dryFruits"}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArrayFeatures.map((el, index) => (
                <CardFeatures
                  loading="Loading...."
                  key={index + "cartLoading"}
                />
              ))}
        </div>
      </div>

      <AllProducts heading={"Quality builds here"} />
      <Contact />
    </div>
  );
};

export default Home;
