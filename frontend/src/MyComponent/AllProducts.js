import React, { useEffect, useRef, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeatures from "./CardFeatures";
import HomeCard2 from "./HomeCard2";
import { useSelector } from "react-redux";

const AllProducts = ({ heading, loading }) => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);
  const homeProductCartListDryFruits = productData.filter(
    (el) => el.category === "dryFruits" || "Fruits",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeatures = new Array(10).fill(null);

  const slideProductRef = useRef();
  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  const categoryList = [...new Set(productData.map((el) => el.category))];

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el === filterby}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center h-full min-h-[170px]">
            <p>{loading}</p>
          </div>
        )}
      </div>

      <div
        className="flex flex-wrap gap-5 p-4 justify-center"
        ref={slideProductRef}
      >
        {homeProductCartList[0]
          ? dataFilter.map((el) => {
              return (
                <HomeCard2
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
                <HomeCard2 key={index + "allProduct"} loading={"Loading...."} />
              );
            })}
      </div>
    </div>
  );
};

export default AllProducts;
