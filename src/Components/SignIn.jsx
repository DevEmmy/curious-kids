import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import StudentSignIn from "./StudentSignIn";
import SchoolSignIn from "./SchoolSignIn";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const [loginType, setLoginType] = useState("none");
  const [forgot, setForgot] = useState(false);

  return (
    <>
      <div className="h-full w-full flexss flex-wrap">
        <div
          className={`w-[45%] h-full ${
            loginType === "institution" ? "bg-purplePrime" : "bg-sec1"
          } py-[4em] sm:py-[2em] px-[5em] text-sec2 sm:px-[1.5em] md1:w-full`}
        >
          <div className="cflexss gap-[1.5em]">
            <a
              href="/"
              className="w-[320px] lg:w-[300px] ls:w-[280px] sm:w-[280px]"
            >
              <img src="logo.svg" alt="CSkidz" />
            </a>
            <div>
              <h1 className="text-[60px] lg:text-[55px] ls:text-[32px] font-[800]">
                Welcome back to CuriousKidz!
              </h1>
              <p className="text-[18px] lg:text-[17px] ls:text-[16px] sm:text-[20px] font-[400] pt-[0.5em] leading-[1.7em]">
                We're thrilled to have you back with CuriousKidz! Rediscover the
                joy of learning with our innovative courses and foster
                creativity, critical thinking, and problem-solving skills. Let's
                make learning an exciting adventure
              </p>
            </div>
            <div className="cflexss gap-[20px] text-[18px] lg:text-[17px] ls:text-[16px] sm:text-[20px] font[600] pt-[160px] leading-[1.7em]">
              <div className="w-[7em] sm:w-[8em]">
                <Image src="Review.svg" width={100} height={100} alt="review" />
              </div>
              <p>
                "My daughter's experience with CuriousKidz has been nothing
                short of amazing! She used to find science and math daunting,
                but with the interactive lessons and engaging projects, she's
                now excelling in these subjects.
              </p>
              <p>
                The program not only boosted her academic performance but also
                instilled confidence in her abilities. Thank you, CuriousKidz,
                for unlocking her potential!"
              </p>
              <div className="flexsm gap-[0.5em] w-full">
                <div className="w-[3em]">
                  <Image
                    src="estbg.svg"
                    width={100}
                    height={100}
                    alt="profile"
                  />
                </div>
                <p className="font-[800]">Esther Howard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full bg-white pt-[6em] sm:py-[2em] pl-[6em] pr-[7em] sm:px-[1.5em] md1:w-full">
          {loginType === "none" && (
            <>
              <div className="cflexmm h-full gap-[2em] w-full py-[3em]">
                <div
                  className="w-[90%] h-[332px] lg:h-[300px] sm:w-full p-[0.15em] pb-[0.5em] rounded-xl bg-sec1 cursor-pointer"
                  onClick={() => {
                    setLoginType("student");
                  }}
                >
                  <div className="w-full h-full bg-white flexmm text-[28px] lg:text-[24px] ls:text-[20px] font-[700] rounded-xl">
                    <p>Student</p>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[332px] lg:h-[300px] sm:w-full p-[0.15em] pb-[0.5em] rounded-xl bg-purplePrime cursor-pointer"
                  onClick={() => {
                    setLoginType("institution");
                  }}
                >
                  <div className="w-full h-full bg-white flexmm text-[28px] lg:text-[24px] ls:text-[20px] font-[700] rounded-xl">
                    <p>Schools / Institutions</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {loginType === "student" && !forgot && (
            <StudentSignIn setLoginType={setLoginType} setForgot={setForgot} />
          )}
          {loginType === "institution" && !forgot && (
            <SchoolSignIn setLoginType={setLoginType} setForgot={setForgot} />
          )}
          {loginType === "student" && forgot && (
            <ForgotPassword loginType={loginType} setForgot={setForgot} />
          )}
          {loginType === "institution" && forgot && (
            <ForgotPassword loginType={loginType} setForgot={setForgot} />
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
