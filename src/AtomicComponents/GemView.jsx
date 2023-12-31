import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import { GetAllBadges } from "@/services/request";

const GemView = ({ student }) => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    let data = await GetAllBadges();
    console.log(data);
    setBadges(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const missions = [
    {
      name: "Super Video Watcher",
      description: "Unlock this trophy by watching 10 awesome videos",
      max: 10,
      value: 5,
    },
    {
      name: "Quiz Whiz",
      description:
        "You're on fire! Earn the Quiz Whiz badge by acing 5 quizzes. You're a true mastermind!",
      max: 5,
      value: 2,
    },
    {
      name: "Course Champion",
      description:
        "You've conquered courses like a true champion! Collect this badge as a reward for completing 20 courses.",
      max: 20,
      value: 2,
    },
    {
      name: "Helping Hand",
      description:
        "You're a star in the community! The Helping Hand badge is yours for being an active friend, sharing knowledge, and brightening up discussions.",
      max: 1,
      value: 0,
    },
  ];

  return (
    <div className="w-full">
      <div className="block balance flexmm border rounded-3xl gap-2 h-44 lf:hidden">
        <IoDiamondOutline size={50} className="text-primary3" />
        <div className="font-[600] text-[19px] lg:text-[17px] ls:text-[15px]">
          <p>Learning Gems</p>

          <h2 className="text-[48px] lg:text-[40px] ls:text-[38px] font-[900]">
            {student?.gem || 0} LG
          </h2>
        </div>
      </div>

      <div className="mt-10 h-[45vh]">
        <div className="flex justify-between mb-2 text-[24px] lg:text-[20px] text-[#222] ls:text-[18px] font-[400]">
          <p className="font-marker font-[800]">VICTORY BADGE</p>
          <p className="text-gray-500 text-[20px] lg:text-[18px] ls:text-[16px]">
            View all
          </p>
        </div>

        <div className="border rounded-2xl p-3 overflow-y-auto h-full flex flex-col gap-[24px]">
          {loading ? (
            <>
              <div className="w-full h-full flexmm">
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
              {badges.map((mission, i) => {
                return (
                  <div>
                    <p className="text-gray-700 text-[17px] font-[700]">
                      {mission.title}
                    </p>
                    <p className="text-gray-400 text-[14px]">
                      {mission.description}
                    </p>
                    <div className="flex gap-[4px] items-center">
                      <div className="w-full h-[21px] bg-gray-200 rounded-3xl">
                        <div
                          style={{
                            width:
                              mission.numberOfVideos > student.completedCourses
                                ? (student.completedCourses /
                                    mission.numberOfVideos) *
                                    100 +
                                  2 +
                                  "%"
                                : "100%",
                          }}
                          className={`h-[21px] bg-primary3 rounded-tl-3xl rounded-bl-3xl`}
                        ></div>
                      </div>
                      <p className="text-[17px] font-[700]">
                        {mission.numberOfVideos > student.completedCourses ? (
                          <>
                            {student.completedCourses}/{mission.numberOfVideos}
                          </>
                        ) : (
                          <>
                            {mission.numberOfVideos}/{mission.numberOfVideos}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GemView;
