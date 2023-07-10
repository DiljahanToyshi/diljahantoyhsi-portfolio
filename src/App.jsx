import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './Page/home/Home'
import SocialLinks from './Page/home/SocialLinks'
import Portfolio from './Page/home/Portfolio'
import Skills from "./Page/home/Skills"

import "./App.css";
import { useEffect } from "react"
import "aos/dist/aos.css";

import Aos from "aos"
import Services from "./Page/home/Services"
import Contact from "./Page/home/Contact/Contact"




function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <BrowserRouter>    <div className="bg-green-200 mx-2"> <Navbar></Navbar>
    <Home></Home>
    <SocialLinks></SocialLinks>
    <Services></Services>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Contact></Contact>
    </div>
</BrowserRouter>
    </>
  )
}

export default App
