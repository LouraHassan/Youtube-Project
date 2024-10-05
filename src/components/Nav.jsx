import React from "react";
import logo from "/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import image from "../assets/user.png";
function Nav(props) {
  return (
    <div className="w-full sticky top-0 bg-base-100 pb-2 p-5 laptopsm:p-0">
      <div className="flex items-center justify-between  sticky top-0 ">
        <Link to={`/home/${props.userId}`}>
          <div className="flex items-center">
            <img
              src={logo}
              alt="youtube logo"
              className="w-[15vw] tablet:w-[30px]"
            />
            <p className="text-primary text-[2rem] tablet:text-[1rem]">
              YouTube
            </p>
          </div>
        </Link>
        <div className=" items-center hidden laptopsm:flex">
          <div className="join mx-1  ">
            <input
              className="input input-bordered rounded-full join-item w-[30vw]"
              placeholder="search"
            />
            <button className="btn join-item rounded-r-full bg-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F1F1F1"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </button>
          </div>
          <button className="btn btn-circle bg-neutral mx-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#F1F1F1"
              className="icon icon-tabler icons-tabler-filled icon-tabler-microphone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 9a1 1 0 0 1 1 1a8 8 0 0 1 -6.999 7.938l-.001 2.062h3a1 1 0 0 1 0 2h-8a1 1 0 0 1 0 -2h3v-2.062a8 8 0 0 1 -7 -7.938a1 1 0 1 1 2 0a6 6 0 0 0 12 0a1 1 0 0 1 1 -1m-7 -8a4 4 0 0 1 4 4v5a4 4 0 1 1 -8 0v-5a4 4 0 0 1 4 -4" />
            </svg>
          </button>
        </div>
        <div className="flex p-5 items-center">
          <button className="hidden laptopsm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-video-plus mx-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
              <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
              <path d="M7 12l4 0" />
              <path d="M9 10l0 4" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-bell mx-2 w-[60px] h-[60px] laptopsm:w-[24px] laptopsm:h-[24px]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </button>
          <button className="laptopsm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search w-[60px] h-[60px] laptopsm:w-[30px] laptopsm:h-[30px]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          <div className="dropdown dropdown-end hidden laptopsm:block">
            <div
              tabIndex={0}
              role="button"
              className=" bg-secondary rounded-full p-1 mx-2"
            >
              {" "}
              <img
                src={image}
                alt="channel"
                className="rounded-full w-[25px]"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <p>Account</p>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li className="text-accent">
                <Link to="/">Sign out</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
