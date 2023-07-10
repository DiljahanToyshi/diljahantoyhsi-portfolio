import beautyCanva from "../../assets/img1.png";
import restaurent from "../../assets/img2.png";
import toys from "../../assets/img3.png";
import news from "../../assets/img4.png";
import jobs from "../../assets/img5.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: beautyCanva,
      siteUrl:'https://assignment-12-16337.web.app/',
      codeUrl:'https://github.com/DiljahanToyshi/Beauty-Canvas-Academy'
    },
    {
      id: 2,
      src: news,
      siteUrl:'https://bright-sable-d5592e.netlify.app/',
     
    },
    {
      id: 3,
      src: toys,
      siteUrl:'https://simple-firebase-3fd94.web.app/',
      codeUrl:'https://github.com/DiljahanToyshi/Build-A-Twin'
    },
    {
      id: 4,
      src: jobs,
      siteUrl:'https://delightful-babka-73e246.netlify.app/',
      codeUrl:'https://github.com/DiljahanToyshi/job-portal2'
    },
    {
      id: 5,
      src: restaurent,
      codeUrl:'https://github.com/DiljahanToyshi/Indian-Cuisine'
    },
   
  ];

  return (
    <div 
      name="portfolio"
      className=" w-full md:h-screen text-white " 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-right" data-aos-duration="1000"
     className="pb-8 md:text-center sm:pl-5  text-gray-500 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,siteUrl,codeUrl}) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"> 
              <a href={siteUrl}>
              <button className=" w-1/2 px-6 py-3 m-4   text-gray-500 font-medium duration-200 hover:scale-105">
                  Live
                </button>
              </a>
             <a href={codeUrl}></a>
                <button className="px-6 py-3 w-1/2 m-4 text-gray-500 font-medium duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;