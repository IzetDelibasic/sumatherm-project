import React from 'react';

interface NavBurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavBurger: React.FC<NavBurgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className="lg:hidden mr-[3rem] cursor-pointer my-auto"
      onClick={toggleMenu}
    >
      <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-700 ${isOpen ? 'rotate-[225deg] -translate-y-[0rem]' : 'translate-y-0'}`}></div>
      <div className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-700 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
      <div className={`w-6 h-0.5 bg-gray-800 mt-1.5 transition-transform duration-700 ${isOpen ? '-rotate-[-135deg] translate-y-[-0.9rem]' : 'translate-y-0'}`}></div>
    </div>
  );
}

export default NavBurger;
