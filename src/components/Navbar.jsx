import  { useState } from 'react';
import { HiBars4, HiXMark } from "react-icons/hi2";
import { FaEnvelopeOpen, FaFolderOpen, FaHome } from 'react-icons/fa';
import { GrNetworkDrive } from "react-icons/gr";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
      {
          id: 1,
          icon: <FaHome  className="fill-green-500"/>,
          name: 'Home',
          link: 'home'
      },
      {
          id: 2,
          icon: <GrNetworkDrive className="fill-green-500" />,
          name: 'Skill',
          link: 'skill'
      },
      {
          id: 3,
          icon: <FaFolderOpen className="fill-green-500" />,
          name: 'Portfolio',
          link: 'portfolio'
      },
      {
          id: 4,
          icon: <FaEnvelopeOpen className="fill-green-500"/>,
          name: 'Contact',
          link: 'contact'
      },
  ]
   

    return (
      
        <div className='sticky  bg-gray-100 px-4 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-center'>
         
  
          {/* Nav Items Section */}
          <ul className='items-center hidden space-x-8 lg:flex'>
          {links.map(({name,icon,link},index) =>{
                        return(
                            <li key={index} className=''>
                                <Link to={link}  title={name}
 
              className={({ isActive }) => (isActive ? 'px-4 cursor-pointer capitalize   hover:scale-105  font-medium tracking-wide text-green-500 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400')}> 
              <div className='flex gap-2 m-2' ><div className='h-11 '>{icon} </div>
              <p>{name}</p></div></Link>
                            </li> )})}
          </ul>
          {/* Mobile Navbar Section */}
          <div className='lg:hidden'>
            {/* Dropdown Open Button */}
            <button
              aria-label='Open Menu'
              title='Open Menu' className='text-start'
              onClick={() => setIsMenuOpen(true)}
            >
              <HiBars4 className='w-5 text-gray-600' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='mb-4'>
                  
                    {/* Dropdown menu close button */}
                    <div className='text-end'>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiXMark className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                    {links.map(({name,icon,link},index) =>{
                        return(
                            <li key={index} className=''>
                                <Link onClick={ () =>setIsMenuOpen(!isMenuOpen)} to={link} title={name}
              className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-green-500 transition-colors duration-200' : 'ont-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400')}> <div className='flex gap-2 m-2' >{icon} <p>{name}</p></div></Link>
                            </li> )})}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
           
    );
};

export default Navbar;