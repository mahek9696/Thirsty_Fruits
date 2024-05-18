import React, { useState } from "react";
import login from "../Media/login3.gif";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  //console.log(userData.user);

  const dispatch = useDispatch();

  //console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/Login`,
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

      toast(dataRes.message);

      if ((dataRes, alert)) {
        //dispatch(dataRes);
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      console.log(userData);
    } else {
      alert("Please Enter require field");
    }
  };

  return (
    <div>
      <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4 rounded focus-within:outline focus-within:outline-blue-300">
          {/* <h1 className='text-center text-2xl font-bold'>SignIn</h1>  */}
          <div className="w-20 h-20 py-0 overflow-hidden rounded-full  drop-shadow-md shadow-md m-auto">
            <img src={login} className="w-full h-full" />
          </div>

          <form
            className="w-full py-5 rounded flex flex-col "
            onSubmit={handleSubmit}
          >
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

            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-pink-300">
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

            <button className="w-full max-w-[150px] m-auto bg-pink-400 hover:bg-pink-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
              Login
            </button>

            <p className="text-left text-sm mt-5">
              Don't have account ?{" "}
              <Link to={"/SignIn"} className="text-pink-600 underline">
                SignIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
