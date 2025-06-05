import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import SeedLogo from '../../assets/Seed Logo.png'; // Ensure this path is correct if you uncomment the logo
import { AlignJustify, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuVisiblity, setMenuVisibility] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisibility(false);
      }
    };

    if (menuVisiblity) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuVisiblity]);

  const handleClick = () => {
    setMenuVisibility(!menuVisiblity);
  };

  // Function for Desktop NavLink classes
  const getDesktopNavLinkClasses = ({ isActive }) =>
    `relative group pb-1 transition-colors duration-200 ease-in-out ${
      isActive ? "text-blue-800" : "text-gray-700 hover:text-blue-primary"
    }
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out
    ${isActive ? "after:w-full" : "group-hover:after:w-full after:w-0"}
    `;

  // Function for Mobile NavLink classes (includes w-fit to constrain line length)
  const getMobileNavLinkClasses = ({ isActive }) =>
    `relative group pb-1 transition-colors duration-200 ease-in-out block w-fit ${ // Added w-fit here
      isActive ? "text-blue-800" : "text-gray-700 hover:text-blue-primary"
    }
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out
    ${isActive ? "after:w-full" : "group-hover:after:w-full after:w-0"}
    `;


  return (
    <div className='relative' ref={menuRef}>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[400px] px-[201px] h-[80px] items-center bg-white font-poppins">
        <div className='flex items-center gap-[2.72px]'> {/* Logo group */}
          {/* If SeedLogo is meant for desktop, uncomment and ensure path is correct */}
          <img src={SeedLogo} alt="SeedEngineering Logo" className='h-16 w-auto object-cover' />
          {/* <span className="font-lusitana text-[19px] font-bold leading-[100%] text-blue-800">Seed Engineering</span> */}
        </div>
        <div className='flex items-center gap-16'> {/* Navigation links group */}
          <NavLink to="/" className={getDesktopNavLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={getDesktopNavLinkClasses}>About</NavLink>
          <NavLink to="/services" className={getDesktopNavLinkClasses}>Services</NavLink>
          <NavLink to="/project" className={getDesktopNavLinkClasses}>Project</NavLink>
          <NavLink to="/contact" className={getDesktopNavLinkClasses}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex justify-between p-[17px] items-center'>
        <div className='flex items-center  gap-[2.3px]'>
          <img src={SeedLogo} alt=" Logo of Letter Cj" className='w-[20.6px] h-[19.1px]' />
          <span className='font-bold font-lusitana text-[16.54px] leading-[100%]'>Seed Engineering</span>
        </div>
        {menuVisiblity ? (<X onClick={handleClick} />) : (<AlignJustify onClick={handleClick} />)}
      </div>

      {menuVisiblity && (
        <div className="md:hidden fixed right-0 md:top-[56px] top-10 z-50 w-[269px] min-h-screen shadow-md bg-white pl-[21px] pt-[25px] flex flex-col">
          <ul className="flex flex-col gap-4">
            {/* Using getMobileNavLinkClasses for mobile links */}
            <NavLink to="/" className={getMobileNavLinkClasses} onClick={() => setMenuVisibility(false)}>Home</NavLink>
            <NavLink to="/about" className={getMobileNavLinkClasses} onClick={() => setMenuVisibility(false)}>About</NavLink>
            <NavLink to="/services" className={getMobileNavLinkClasses} onClick={() => setMenuVisibility(false)}>Services</NavLink>
            <NavLink to="/contact" className={getMobileNavLinkClasses} onClick={() => setMenuVisibility(false)}>Contact</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;