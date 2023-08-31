import Link from "next/link";
import Image from "next/image";
import ImageStacked from "./ImageStacked";

const VideoCard = ({
  image,
  title,
  heading,
  content,
  author,
  images,
  enrolled,
}) => {
  return (
    <>
      <a href="/" className="w-[350px] flex-shrink sm:w-full">
        <div className="w-full border-[1px] border-[#E6E6E6] cflexbs gap-[12px] min-h-[25em] lg:min-h-[29em] p-[10px] rounded-xl cursor-pointer">
          <div className="w-full flexmm">
            <img src={`${image}.svg`} alt={`${image}`} />
          </div>
          <div className="py-[2px] px-[10px] bg-[#F9F5FF] text-purplePrime text-[14px] sm:text-[16px] rounded-full font-[400]">
            {title}
          </div>
          <p className="text-[20px] sm:text-[25px] font-[700] text-[#101828]">
            {heading}
          </p>
          <p className="text-[16px] sm:text-[19px] font-[400] text-[#667085]">
            {content}
          </p>
          <p className="text-[14px] sm:text-[16px] text-purplePrime font-[600]">
            {author}
          </p>
          <div className="flexsm gap-[15px] sm:py-[1em]">
            <ImageStacked images={images} />
            <p className="text-[14px] sm:text-[16px] pl-[5.6em] font-[400] sm:pl-[4.6em]">
              {enrolled}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default VideoCard;