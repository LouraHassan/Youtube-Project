import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
const link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn";
function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, [warningText]);
  const SignupAction = () => {
    if (name == "" || username == "" || password == "") {
      setWarningText("You have to enter values first!");
    } else {
      checkUser(username).then((isFound) => {
        if (isFound) {
          setWarningText("You already have an account");
        } else {
          axios
            .post(link, {
              name: name,
              userName: username,
              password: password,
            })
            .then(function (response) {
              getId(username).then((id) => {
                let userId = id;
                navigate(`/home/${userId}`);
              });
            });
        }
      });
    }
  };
  return (
    <div className="flex items-center py-20 h-screen">
      <div className="w-full flex flex-col justify-around items-center ">
        <div className="flex items-center">
          <img
            src={logo}
            alt="youtube logo"
            className="w-[16vw] tablet:w-[5vw]"
          />
          <p className="text-primary text-[2rem] tablet:text-[3rem]">YouTube</p>
        </div>
        <p className="text-[1.5rem] text-white">
          SignUp and start your journey!
        </p>
        <div className="my-4 flex justify-center rounded-2xl w-[80vw] p-5 bg-neutral tablet:w-[60vw] laptopsm:w-[50vw]">
          <div className="flex flex-col items-center w-[50vw] tablet:w-[30vw] laptopsm:w-[30vw]">
            <div className="">
              <label className="form-control w-full laptop:w-[20vw]">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full laptop:w-[20vw]">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full laptop:w-[20vw]">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <p className="text-error">{warningText}</p>
              <button
                onClick={SignupAction}
                className="btn bg-primary my-4 text-black font-bold border-0 w-full hover:text-accent laptop:w-[20vw]"
              >
                Signup
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/" className="font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const checkUser = (username) => {
  return axios.get(link).then(function (res) {
    let arr = res.data;
    let isFound = arr.find((user) => user.userName == username);
    return isFound;
  });
};
const getId = (username) => {
  return axios.get(link).then(function (res) {
    let arr = res.data;
    let acc = arr.find((user) => user.userName == username);
    return acc.id;
  });
};
export default Signup;
