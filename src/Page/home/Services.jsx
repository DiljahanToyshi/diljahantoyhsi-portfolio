import React from "react";
import frontendImg from "../../assets/front-end.png";
import backend from "../../assets/backend.png";
import design from "../../assets/design.png";

const Services = () => {
  return (
    <section name="services">
      <div className=" lg:pt-5 md:ml-24 py-3 md:py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
        <div className="sm:text-start md:text-center ">
          <h2 className="mb-5 text-4xl  text-gray-600"> What do I help </h2>
        </div>
        <div className=" flex flex-col justify-center sm:py-4 ">
          <div className=" w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 ">
            <div className=" relative text-gray-700  text-sm font-semibold">
              {/* vertical line running through the middle  */}
              <div className=" hidden absolute w-1 sm:block bg-green-500 h-full left-1/2 transform-translate-x-1/2 "></div>
              {/* Left card */}
              <div className=" mt-6 sm:mt-0 sm:mb-12 ">
                <div className=" flex items-center flex-col sm:flex-row ">
                  <div className=" flex justify-start w-full mx-auto items-center ">
                    <div className=" w-full sm:w-1/2 sm:pr-8 ">
                      <div
                       data-aos="fade-right"
                       data-aos-delay="100"
                       data-aos-duration="1400"
                        className="bg-gray-100 p-4 rounded shadow-md group hover:bg-green-400 cursor-pointer ease-in duration-150 ">
                        <h3 className="text-gray-500 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-x1 ">
                          {" "}
                          Frontend Development{" "}
                        </h3>

                        <p className="text-[15px] text-gray-500 group-hover:text-white group-hover:font-[500] leading-7 ">
                        Front end development refers to the practice of creating and implementing the user interface and user experience of a website or application using HTML, CSS, and JavaScript.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-green-500 border-gray-500 border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className=" mt-6 sm:mt-0 sm:mb-12 ">
                <div className=" flex items-center flex-col sm:flex-row sm:gap-5">
                  <div className=" flex justify-end w-full mx-auto items-center ">
                    <div className=" w-full sm:w-1/2 sm:pl-8 ">
                      <div
data-aos="fade-left"
data-aos-delay="50"
                       data-aos-duration="1300"
                        className="bg-gray-100 p-4 rounded shadow-md group hover:bg-green-400 cursor-pointer ease-in duration-150 ">
                        <h3 className="text-gray-500 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-x1 ">
                          {" "}
                          Web Development{" "}
                        </h3>

                        <p className="text-[15px] text-gray-500 group-hover:text-white group-hover:font-[500] leading-7 ">
                        Web development refers to the process of creating and maintaining websites. It involves tasks such as coding, designing, and implementing features to ensure functionality and user experience .{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-green-500 border-gray-500 border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
               {/* Left card */}
               <div className=" mt-6 sm:mt-0 sm:mb-12 ">
                <div className=" flex items-center flex-col sm:flex-row sm:gap-5">
                  <div className=" flex justify-start w-full mx-auto items-center ">
                    <div className=" w-full sm:w-1/2 sm:pr-8 ">
                      <div
                      data-aos="fade-right"
                      data-aos-delay="100"
                       data-aos-duration="100"
                        className="bg-gray-100 p-4 rounded shadow-md group hover:bg-green-400 cursor-pointer ease-in duration-150 ">
                        <h3 className="text-gray-500 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-x1 ">
                          {" "}
                         Web Design{" "}
                        </h3>

                        <p className="text-[15px] text-gray-500 group-hover:text-white group-hover:font-[500] leading-7 ">
                        Convert Figma, Xd, & Photoshop Design to react Clean, modern designs optimized


.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-green-500 border-gray-500 border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={design} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
