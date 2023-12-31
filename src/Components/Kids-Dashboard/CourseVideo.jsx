import Nav from "@/AtomicComponents/Nav";
import Image from "next/image";
import Link from "next/link";
import SubTopic from "@/AtomicComponents/SubTopic";
import { ArrowLeftOutline, HeartOutline } from "heroicons-react";
import Recommended from "@/AtomicComponents/Recommended";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import { completeVideoRequest, viewVideoRequest, watchVideoRequest } from "@/services/request";

const CourseVideo = ({ student, course, loading }) => {
  const [size, setSize] = useState(window.innerWidth);
  var getYouTubeID = require("get-youtube-id");
  const [url, setURL] = useState("");  

  useEffect(() => {
    if (!loading) {
      setURL(getYouTubeID(course.link));
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    window.removeEventListener("resize", () => {
      setSize(window.innerWidth);
    });
  },[size]);

  // const viewVideo= async () =>{
  //   await viewVideoRequest(course._id)
  // }

  useEffect(() => {
    if (course._id) {
      viewVideoRequest(course._id);
    }
  }, [course]);

  const opts = {
    height: "550",
    width: `${(size * 60) / 100}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const onPlay = () => {
    watchVideoRequest(course._id);
  };

  const onComplete = ()=>{
    completeVideoRequest(course._id)
  }

  const Topic = [
    {
      topic: "Introduction to Arts and Crafts",
      contents: [
        {
          track: "Discover the importance of creativity and self-expression.",
          completed: true,
        },
        {
          track:
            "Explore various art forms and techniques, setting the stage for your artistic journey.",
          completed: true,
        },
      ],
    },
    {
      topic: "Getting Started with Basic Materials",
      contents: [
        {
          track:
            "Learn about essential supplies for successful arts and crafts projects.",
          completed: true,
        },
        {
          track:
            "Set up your own creative workspace for a comfortable and inspiring environment.",
          completed: false,
        },
      ],
    },
    {
      topic: "Exploring Colors and Textures",
      contents: [
        {
          track: "Discover the importance of creativity and self-expression.",
          completed: true,
        },
        {
          track:
            "Explore various art forms and techniques, setting the stage for your artistic journey.",
          completed: false,
        },
      ],
    },
  ];
  const [selected, setSelected] = useState("question");
  return (
    <>
      <Nav active={1} student={student} />
      {loading ? (
        <>
          <div className="w-full flexmm py-[20em]">
            <SpinnerCircular
              color="#00AC76"
              className="mr-4"
              secondaryColor={"#eeeeee"}
              size={50}
              thickness={150}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-full mt-[100px] flexss gap-[1em] pt-[2em] px-[5%]">
            <a href="/kids-dashboard/courses" className="flexmm">
              <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
                <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                  <ArrowLeftOutline size="12px" color="#00AC76" />
                </div>
              </div>
            </a>
            <div className="cflexss font-[600] text-[20px] lg:text-[18px] ls:text-[16px] gap-[12px]">
              <p className="text-[28px] lg:text-[24px] ls:text-[20px] font-[600]">
                {course.name}
              </p>
              {/* <p>22 Lessons</p> */}
            </div>
          </div>

          <div className="w-full flexbs pt-[2em] px-[5%] gap-[1em] flex-wrap">
            <div className="w-[68%] sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
              <div className="w-full h-auto flexss cursor-pointer">
                <YouTube
                  videoId={url}
                  opts={opts}
                  onReady={_onReady}
                  onPlay={onPlay}
                  className={"w-full rounded-[12px]"}
                  onEnd={onComplete}
                />
              </div>
            </div>
            <div className="w-[28%] sm:w-full cflexss gap-[16px] border-[1px] rounded-[8px] h-[670px] lg:h-[600px] ls:h-[550px] p-[20px] overflow-y-auto">
              {Topic.map((topic, i) => {
                return <SubTopic {...topic} key={i} />;
              })}
            </div>
          </div>

          <div className="w-full px-[5%] cflexss gap-[3em] py-[2em]">
            <div className="w-full flexsm gap-[1em]">
              <div
                className={
                  selected === "about"
                    ? "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] rounded-full py-[20px] px-[52px] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                    : "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] cursor-pointer py-[20px] px-[52px] flex-shrink flexmm"
                }
                onClick={() => {
                  setSelected("about");
                }}
              >
                <p> About this course</p>
              </div>
              <div
                className={
                  selected === "transcript"
                    ? "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] rounded-full py-[20px] px-[52px] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                    : "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] cursor-pointer py-[20px] px-[52px] flex-shrink flexmm"
                }
                onClick={() => {
                  setSelected("transcript");
                }}
              >
                <p> Transcript</p>
              </div>
              <div
                className={
                  selected === "question"
                    ? "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] rounded-full py-[20px] px-[52px] flex-shrink flexmm bg-primary2 text-white cursor-pointer"
                    : "text-[600] text-[19px] lg:text-[17px] ls:text-[15px] cursor-pointer py-[20px] px-[52px] flex-shrink flexmm"
                }
                onClick={() => {
                  setSelected("question");
                }}
              >
                <p> Ask question</p>
              </div>
            </div>
            <div className="w-full cflexss gap">
              {selected === "about" && (
                <>
                  <h1>ABOUT THIS COURSE</h1>

                  <p className="text-[1.2em] font-[600]">{course.name}</p>
                  <p className="text-[1em] text-gray-500">
                    {course.description}
                  </p>
                </>
              )}
              {selected === "transcript" && (
                <>
                  <h1>COURSE TRANSCRIPT</h1>
                </>
              )}
              {selected === "question" && (
                <>
                  {/* <div className="w-full cflexsm gap-[1em] overflow-y-auto h-auto px-[2em]">
                    <div className="flexbs w-full flex-wrap font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
                      <div className="flexss gap-[24px]">
                        <div className="flexmm w-[60px] h-[60px]">
                          <img src="/kid1.svg" alt="jacob jones" />
                        </div>
                        <div className="w-full cflexss gap-[1em]">
                          <div className="w-full cflexss">
                            <p className="font-[700]">Jacob Jones</p>
                            <p className="text-[#808080]">@jjones12</p>
                          </div>
                          <p>
                            Can I use my own art supplies, or do I need to
                            purchase the materials recommended in the course?
                          </p>
                          <p className="text-primary2 cursor-pointer">Answer</p>
                        </div>
                      </div>
                      <div className="cflexss gap-[24px]">
                        <p className="text-[#808080]">10 days ago</p>
                        <HeartOutline
                          color="#00AC76"
                          style={{ cursor: "pointer" }}
                          size="24px"
                        />
                      </div>
                    </div>

                    <div className="flexbs w-full flex-wrap font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
                      <div className="flexss gap-[24px]">
                        <div className="flexmm w-[60px] h-[60px]">
                          <img src="/kid2.svg" alt="jacob jones" />
                        </div>
                        <div className="w-full cflexss gap-[1em]">
                          <div className="w-full cflexss">
                            <p className="font-[800]">Annette Black</p>
                            <p className="text-[#808080]">@black.anne</p>
                          </div>
                          <p>
                            I'm not very confident in my artistic abilities.
                            Will I be able to keep up with the course?
                          </p>
                          <p className="text-primary2 cursor-pointer">Answer</p>
                        </div>
                      </div>
                      <div className="cflexss gap-[24px]">
                        <p className="text-[#808080]">2 days ago</p>
                        <HeartOutline
                          color="#00AC76"
                          style={{ cursor: "pointer" }}
                          size="24px"
                        />
                      </div>
                    </div>
                  </div> */}

                  <div className="w-full flexmm">
                    <div className="w-[70%] flex-shrink px-[40px] py-[35px] cflexms gap-[20px] bg-[#CCEEE4] rounded-[8px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
                      <p className="text-primary2 font-[700]">Response</p>
                      <textarea
                        type="text"
                        name="response"
                        className="p-[1.5em] h-[94px] w-full rounded-[8px] outline-none resize-none"
                        placeholder="Type your response here..."
                      />
                      <div className="w-full flexem">
                        <button className="py-[20px] px-[52px] bg-primary2 text-white rounded-full">
                          Send response
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-full px-[5%] flexsm py-[2em]">
            {/* <Recommended courses={courses}/> */}
          </div>
        </>
      )}
    </>
  );
};

export default CourseVideo;
