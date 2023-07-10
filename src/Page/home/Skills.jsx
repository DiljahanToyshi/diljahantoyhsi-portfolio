import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import express from "../../assets/express.png";
import firebase from "../../assets/firebase.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import bootstrap from "../../assets/bootstrap.png";



const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-600",
    },
    {
        id: 8,
        src: mongodb,
        title: "Mongodb",
        style: "shadow-green-700",
      },
      {
        id: 9,
        src: firebase,
        title: "Firesbase",
        style: "shadow-yellow-400",
      },
      {
        id: 10,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 11,
        src: express,
        title: "Express",
        style: "shadow-gray-700",
      },
      {
        id: 12,
        src: node,
        title: "Node",
        style: "shadow-lime-400",
      },
  ];

  return (
    <div
      name="skill"
      className="w-full md:h-screen  md:mt-24 sm:pt-64  "
    >
      <div  className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="sm:text-start md:text-center text-gray-600">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div data-aos="flip-left"
     data-aos-easing="ease-in-back"
     data-aos-duration="1000" className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md bg-green-400 hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;