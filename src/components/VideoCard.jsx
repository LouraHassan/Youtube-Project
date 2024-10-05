import React from "react";
function VideoCard(props) {
  return (
    <div key={props.key} className="flex items-center  w-full h-fit py-2">
      <img
        src={props.image}
        alt="video thumbnail"
        className="rounded-xl w-[26vw]  laptopsm:w-[12vw]"
      />
      <div className="flex  items-start  w-full">
        <div className="w-full flex flex-col justify-between mx-2 text-xs  h-[8vh] laptopsm:h-fit">
          <p className="text-primary font-semibold text-[1.2rem] laptopsm:text-[1rem] my-2">
            {props.title}
          </p>
          <p className="my-1">{props.channel}</p>
          <div className="flex items-center my-1">
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
export default VideoCard;
