import home from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className="px-4 md:ml-24 py-3 md:py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-11">
      <div name="home" className="md:flex gap-14 justify-center items-center">
        <img src={home} alt="my Profile" className="rounded-md w-96 h-96" />

        <div className="home-content">
          <p className="text-4xl font-serif font-semibold">
            <span  data-aos="flip-up"
     className="text-green-500"> I'm Diljahan Toyshi</span> <br />
            <span  data-aos="flip-up"
    className="text-gray-500">Web Designer</span>
          </p>
          <p className="w-10/12 font-sans " >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall.
            product
          </p>
            <Link  to="portfolio"
              smooth
              duration={500} className="btn bg-green-300 text-gray-600 rounded-2xl hover:text-green-500">
              portfolio<span><FaArrowRight/></span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
