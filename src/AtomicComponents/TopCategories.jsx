import Link from "next/link";

const TopCategories = () => {
  const Categories = [
    {
      category: "Film & Animation",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
    {
      category: "Autos & Vehicles",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Music",
      background: "#8D67CE",
      color: "white",
      link: "",
    },
    {
      category: "Pets & Animals",
      background: "#FE5972",
      color: "white",
      link: "",
    },
    {
      category: "Sports",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Travel & Events",
      background: "#00AC76",
      color: "white",
      link: "",
    },
    {
      category: "Gaming",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
    {
      category: "People & Blogs",
      background: "#FE5972",
      color: "white",
      link: "",
    },
    {
      category: "Comedy",
      background: "#8D67CE",
      color: "white",
      link: "",
    },
    {
      category: "Entertainment",
      background: "#F5AE1E",
      color: "black",
      link: "",
    },
    {
      category: "News & Politics",
    },
    {
      category: "How to & Style",
    },
    {
      category: "Education",
    },
    {
      category: "Science & Technology",
    },
    {
      category: "Nonprofits & Activism",
    },
  ];
  return (
    <>
      <div className="w-full cflexss gap-[1em] font-[400]">
        <h1 className="font-[700] text-[#012B1D] text-[24px] lg:text-[18px] ls:text-[16px]">
          Top categories recommended for you
        </h1>
        <div className="w-full grid grid-cols-5 lf:flexsm lf:overflow-x-auto gap-[20px]">
          {Categories.map((category, i) => {
            return (
              <>
                {i < 10 && (
                  <Link href={category.link} key={i} className="w-full md1:w-[212px]">
                    <div
                      className={`py-[24px] lg:py-[20px] ls:py-[18px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px] w-full rounded-[8px] flexmm bg-[${category.background}] text-${category.color}`}
                    >
                      <p>{category.category}</p>
                    </div>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCategories;
