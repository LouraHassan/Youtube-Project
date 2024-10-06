import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import VideoCard from "../components/VideoCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SelectedVideo from "../components/SelectedVideo";
import Comments from "../components/Comments";
const link = "https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn/";
const listLink =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUUqYu_GiAzFL4ErDEiK9xbA&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU";
const channelLink =
  "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails%2C%20snippet%2C%20statistics&id=UCUqYu_GiAzFL4ErDEiK9xbA&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU";
const Video = () => {
  const [user, setUser] = useState("");
  const [vid, setVid] = useState([]);
  const [channel, setChannel] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [list, setList] = useState([]);
  const [allIds, setAllIds] = useState([]);
  const [vidArr, setVidArr] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [userCommentList, setUserCommentList] = useState([]);
  const { userId } = useParams();
  const { videoId } = useParams();
  const [warningText, setWarningText] = useState("");
  useEffect(() => {}, [warningText]);

  useEffect(() => {
    axios.get(link + userId).then(function (res) {
      setUser(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(listLink).then(function (res) {
      setList(res.data.items);
    });
  }, []);
  useEffect(() => {
    const vidId = list
      .filter((el) => el.snippet.resourceId.videoId !== videoId)
      .map((el) => el.snippet.resourceId.videoId);
    setAllIds(vidId);
  }, [list, videoId]);
  useEffect(() => {
    setVidArr([]);
    allIds.forEach((vidId) => {
      if (vidId !== videoId) {
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
      }
    });
  }, [allIds, videoId]);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU`
      )
      .then(function (res) {
        setVid(res.data.items);
      });
  }, [videoId]);
  useEffect(() => {
    axios.get(channelLink).then(function (res) {
      setChannel(res.data.items[0]);
    });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=AIzaSyBc-j5xNTCjTeiGrqNv3zfDYUx_6T-3jXU`
      )
      .then(function (res) {
        setComments(res.data.items);
        setCommentCount(res.data.pageInfo.totalResults);
      });
  }, [videoId]);
  const commentAction = () => {
    if (userComment == '') {
      setWarningText("You have to add your comment first!");

    } else {
      setWarningText("");
      axios
      .post("https://670192fcb52042b542d81d15.mockapi.io/Comments", {
        videoId: videoId,
        user: `@${user.userName}`,
        Comment: userComment,
        date: new Date(),
        image:
        "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png",
      })
      .then(function (response) {
        setUserComment("");
      })
      .catch(function (error) {});
    }
  };
  useEffect(() => {
    axios
      .get(`https://670192fcb52042b542d81d15.mockapi.io/Comments`)
      .then(function (res) {
        setUserCommentList(res.data);
      });
  }, [userComment]);
  return (
    <div>
      <div className="px-3 hidden laptopsm:block">
        <Nav userId={userId}></Nav>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col  w-[90vw] laptopsm:grid laptopsm:grid-cols-3 laptopsm:grid-rows-3">
          <div className="col-span-2 row-start-1 h-fit max-md:order-1">
            {vid.map((el) => {
              return (
                <SelectedVideo
                  image={el.snippet.thumbnails.maxres.url}
                  title={el.snippet.title}
                  channelImg={channel?.snippet?.thumbnails?.default?.url}
                  channelName={channel?.snippet?.title}
                  subs={channel?.statistics?.subscriberCount}
                  likeCount={el.statistics.likeCount}
                  views={el.statistics.viewCount}
                  date={countTime(el.snippet.publishedAt)}
                  description={el.snippet.description}
                ></SelectedVideo>
              );
            })}
          </div>
          <div className=" col-span-1  row-start-1 row-span-3 max-md:order-2">
            <div className="w-full grid grid-cols-1 max-md:w-full">
              <div className="bg-white flex justify-between items-end rounded-lg p-4 text-black my-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2793E8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                  <p className="text-xl font-semibold ">
                    Let's Stay connected!{" "}
                  </p>
                  <p className="text-xl font-semibold">
                    Follow me on Linkedin 😊
                  </p>
                </div>
                <div>
                  <a
                    className="btn bg-info text-white border-0"
                    href="https://www.linkedin.com/in/loura-alfarsi-010390252/"
                    target="_blank"
                  >
                    Loura Alfarsi
                  </a>
                </div>
              </div>
              {vidArr.map((el) => {
                return (
                  <Link to={`/video/${userId}/${el.id}`}>
                    <VideoCard
                      image={el.snippet.thumbnails.medium.url}
                      title={el.snippet.title}
                      channel={el.snippet.channelTitle}
                      views={el.statistics.viewCount}
                      date={countTime(el.snippet.publishedAt)}
                    ></VideoCard>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" col-span-2 row-start-2 w-full max-md:order-3 laptopsm:w-[55vw] mb-20">
            <p className="text-white text-lg">{commentCount} Comments</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Add comment"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className="input w-full border-b-secondary"
              />
              <button
                onClick={commentAction}
                className="btn bg-primary text-neutral rounded-full hover:bg-primary "
              >
                Add
              </button>
            </div>
            <p className="text-error">{warningText}</p>

            {userCommentList.map((el) => {
              if (el.videoId == videoId) {
                return (
                  <Comments
                    image={el.image}
                    name={el.user}
                    date={countTime(el.date)}
                    comment={el.Comment}
                    like={0}
                  ></Comments>
                );
              }
              return;
            })}
            {comments.map((el) => {
              let likesCount =
                el.snippet.topLevelComment.snippet.likeCount == 0
                  ? ""
                  : el.snippet.topLevelComment.snippet.likeCount;
              return (
                <Comments
                  image={
                    el.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  name={el.snippet.topLevelComment.snippet.authorDisplayName}
                  date={countTime(
                    el.snippet.topLevelComment.snippet.publishedAt
                  )}
                  comment={el.snippet.topLevelComment.snippet.textDisplay}
                  like={likesCount}
                ></Comments>
              );
            })}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full laptopsm:hidden ">
        <BottomNav userId={userId}></BottomNav>
      </div>
    </div>
  );
};
export default Video;
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
