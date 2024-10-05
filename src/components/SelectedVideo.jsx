import React, { useState } from "react";
function SelectedVideo(props) {
  return (
    <div className=" w-full laptopsm:w-[55vw] h-fit">
      <img src={props.image} alt="" className="rounded-lg" />
      <p className="text-2xl font-semibold my-4 text-white">{props.title}</p>
      <div className="flex w-full py-1 justify-between flex-wrap max-md:flex-wrap">
        <div className="flex items-center w-full laptopsm:w-fit justify-between  laptop:my-2">
          <div className="flex">
            <img
              src={props.channelImg}
              alt=""
              className="rounded-full w-[45px] h-[45px]"
            />
            <div className="mx-4">
              <p className="text-[1rem]">{props.channelName}</p>
              <p>{props.subs}</p>
            </div>
          </div>
          <button className="btn rounded-3xl  bg-white text-black btn-sm laptopsm:btn-md">
            Subscribe
          </button>
        </div>
        <div className="flex items-center max-md:w-full max-md:my-2">
          <div className="join rounded-3xl mr-1">
            <button className="btn join-item bg-neutral btn-sm laptopsm:btn-md">
              {" "}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg>
              {props.likeCount}
            </button>
            <button className="btn join-item bg-neutral btn-sm laptopsm:btn-md">
              {" "}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up rotate-180"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg>
            </button>
          </div>
          <button className="btn rounded-3xl bg-neutral mr-1 btn-sm laptopsm:btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-share-3"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
            </svg>
            Share
          </button>
          <button className="btn rounded-3xl bg-neutral mr-1 btn-sm laptopsm:btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            Download
          </button>
          <button className="btn rounded-full bg-neutral mr-1 btn-sm laptopsm:btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F1F1F1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </div>
      </div>
      <div className="rounded-md bg-neutral flex flex-col p-4 my-4">
        <p className="text-white">
          {props.views} views {props.date}
        </p>
        <p className=" break-words ">{props.description}</p>
      </div>
    </div>
  );
}
export default SelectedVideo;
