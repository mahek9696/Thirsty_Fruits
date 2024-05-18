import React, { useState } from "react";
import login from "../Media/login3.gif";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
  });
  //console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowcPassword = () => {
    setShowcPassword((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileImg = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    //console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, cpassword } = data;
    if (firstName && email && password && cpassword) {
      if (password === cpassword) {
        console.log(data);
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/SignIn`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        //console.log(dataRes);

        //alert(dataRes.message);
        toast(dataRes.message);
        if ((dataRes, alert)) {
          navigate("/Login");
        }

        console.log(dataRes);
        //alert("Succesfully Recorded");
      } else {
        alert("password and confirm password are not match");
      }
    } else {
      alert("Please Enter require field");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4 rounded ">
        {/* <h1 className='text-center text-2xl font-bold'>SignIn</h1>  */}
        <div className="w-20 h-20 flex flex-col overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img
            src={data.image ? data.image : login}
            className="w-full h-full"
          />
          <label htmlFor="profileImg">
            <div className="absolute bottom-0 top-19 h-1/3 bg-slate-400 bg-opacity-40 w-full text-center cursor-pointer">
              <p className="text-sm text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImg"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImg}
            />
          </label>
        </div>

        <form
          className="w-full py-5 rounded flex flex-col "
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name :</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-3 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-pink-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name :</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-3 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-pink-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email :</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-3 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-pink-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password :</label>

          <div className="flex px-2 py-1 bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-pink-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>

          <label htmlFor="cpassword">Confirm Password :</label>
          <div className="flex px-2 py-1 bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-pink-300">
            <input
              type={showcPassword ? "text" : "password"}
              id="cpassword"
              name="cpassword"
              className="w-full bg-slate-200 border-none outline-none "
              value={data.cpassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowcPassword}
            >
              {showcPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-pink-400 hover:bg-pink-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            SignIn
          </button>

          <p className="text-left text-sm mt-5">
            Already have account ?{" "}
            <Link to={"/Login"} className="text-pink-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
