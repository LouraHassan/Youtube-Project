import React from "react";
import channel from "../assets/channel_profile.jpg";
function HomeCard(props) {
  return (
    <div key={props.key} className="flex flex-col items-center w-full desktop:w-[20vw] laptop:w-[30vw] laptopsm:w-[35vw] tablet:w-[68vw]">
      <img src={props.image} alt="video thumbnail" className="rounded-2xl w-full " />
      <div className="flex items-start my-3 w-full justify-between p-5 tablet:p-0">
        <img src={channel} alt="channel" className="rounded-full  tablet:w-[40px]" />
        <div className="w-full px-4 text-xs ">
          <p className="text-primary font-semibold my-5 text-[1.8rem] tablet:text-[1rem] tablet:my-0">{props.title}</p>
          <p className="text-[1rem] tablet:text-[0.8rem]">{props.channel}</p>
          <div className="flex items-center text-[1rem] tablet:text-[0.8rem]">
            <p>{props.views} views</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="#F1F1F1"
              className="icon icon-tabler icons-tabler-filled icon-tabler-point mx-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            </svg>
            <p>{props.date}</p>
          </div>
        </div>
        <button>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default HomeCard;
