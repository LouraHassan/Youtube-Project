import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import BadgeLine from "../components/BadgeLine";
import HomeCard from "../components/HomeCard";
const link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn/";
const listLink =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUUqYu_GiAzFL4ErDEiK9xbA&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU";
function Home() {
  const [info, setInfo] = useState("");
  const [list, setList] = useState([]);
  const [vid, setVid] = useState([]);
  const [vidArr, setVidArr] = useState([]);
  let { userId } = useParams();
  useEffect(() => {
    axios.get(link + userId).then(function (res) {
      setInfo(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(listLink).then(function (res) {
      setList(res.data.items);
    });
  }, []);
  useEffect(() => {
    const vidId = list.map((el) => el.snippet.resourceId.videoId);
    setVid(vidId);
  }, [list]);
  useEffect(() => {
    vid.forEach((vidId) => {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${vidId}&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU`
        )
        .then(function (res) {
          const newVid = res.data.items[0];
          setVidArr((prevVidArr) => {
            const isUnique = prevVidArr.some(
              (existingVid) => existingVid.id === newVid.id
            );
            if (!isUnique) {
              return [...prevVidArr, newVid];
            }
            return prevVidArr;
          });
        });
    });
  }, [vid]);
  return (
    <>
      <div className="flex flex-col justify-between items-start">
        <div className="flex">
          <Sidebar></Sidebar>
          <div className="">
            <div className="sticky top-0 bg-base-100 pb-2">
              <Nav userId={userId}></Nav>
              <BadgeLine></BadgeLine>
            </div>
            <div className="grid grid-cols-1 justify-items-center w-full gap-4 py-4 max-md:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 laptopsm:grid-cols-3 tablet:grid-cols-2">
              {vidArr.map((el, index) => {
                return (
                  <Link to={`/video/${userId}/${el.id}`}>
                    <HomeCard
                      key={index}
                      image={el.snippet.thumbnails.medium.url}
                      title={el.snippet.title}
                      channel={el.snippet.channelTitle}
                      views={el.statistics.viewCount}
                      date={countTime(el.snippet.publishedAt)}
                    ></HomeCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full laptopsm:hidden ">
          <BottomNav userId={userId}></BottomNav>
        </div>
      </div>
    </>
  );
}
export default Home;
function countTime(publishedDate) {
  const today = new Date();
  const publish = new Date(publishedDate);
  let durationText = "";
  const seconds = Math.floor((today - publish) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    durationText = years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    durationText = months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks > 0) {
    durationText = weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    durationText = days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    durationText = hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    durationText = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    durationText = seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
  return durationText;
}
