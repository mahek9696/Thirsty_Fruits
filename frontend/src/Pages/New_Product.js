import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const New_Product = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
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

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    //console.log(data);
    //console.log(e.files);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, category, image, price } = data;
    if (name && category && image && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
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
        <label htmlFor="name">Name</label>
        <select
          type={"text"}
          id="name"
          name="name"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.name}
        >
          <option value={""}>select product</option>
          <option value={"almond"}>Almond</option>
          <option value={"peanut"}>peanut</option>
          <option value={"pistachio"}>pistachio</option>
          <option value={"walnut"}>walnut</option>
          <option value={"hazelnut"}>hazelnut</option>
          <option value={"cashew"}>cashew</option>
          <option value={"sesam"}>sesam</option>
          <option value={"nutmeg"}>nutmeg</option>
          <option value={"raisin"}>raisin</option>
          <option value={"dates"}>dates</option>
          <option value={"apple"}>apple</option>
          <option value={"coffee"}>coffee beans</option>
          <option value={"coconut"}>coconut</option>
          <option value={"cardamon"}>cardamon</option>
        </select>
        <label htmlFor="category" className="my-1">
          Category
        </label>
        <select
          className="bg-slate-200 p-1 my-1 rounded"
          id="category"
          name="category"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.category}
        >
          <option value={""}>select category</option>
          <option value={"dryFruits"}>Dry Fruits</option>
          <option value={"Fruits"}>Fruits</option>
        </select>
        <label htmlFor="image" className="my-1">
          Image
          <div className="h-40 w-full bg-slate-200 my-1 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BiUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              name="image"
              onChange={uploadImage}
              className="hidden"
              autoComplete="on"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          id="price"
          name="price"
          className="bg-slate-200 p-1 my-1 rounded"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          id="description"
          name="description"
          className="bg-slate-200 p-1 my-1 rounded resize-none"
          onChange={handleOnChange}
          autoComplete="on"
          value={data.description}
        ></textarea>
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default New_Product;
