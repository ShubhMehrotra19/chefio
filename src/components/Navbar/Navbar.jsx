import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    to: '/home',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Recipes',
    to: '/recipes',
  },
  {
    name: 'Download',
    to: '/downloads',
  },
  {
    name: 'Contact',
    to: '/contact',
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="absolute top-0 left-[82%] bg-slate-400 opacity-25 h-[350px] w-[200px]"></div>
        <div className="flex mx-5 items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
         <NavLink to="/"><div className={`w-32 h-12 text-center text-black text-xl font-bold font-['Poppins'] flex items-center justify-center ${
                      location.pathname === '/chefio-global'
                        ? 'bg-indigo-500 bg-opacity-50 rounded hover:bg-indigo-600 hover:text-white'
                        : ' hover:border-b-2 border-slate-600 transition ease-in-out'
                    }`}>
            Chefio.
          </div></NavLink>
          <div className="hidden lg:block">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <div
                    className={`w-24 h-7 text-center font-medium text-black text-sm font-['Poppins'] relative ${
                      location.pathname === item.to
                        ? 'bg-indigo-500 bg-opacity-50 rounded hover:bg-indigo-600 hover:text-white'
                        : ' hover:border-b-2 border-slate-600 transition ease-in-out'
                    }`}
                  >
                    <NavLink to={item.to} className="w-full h-full flex items-center justify-center">
                      {item.name}
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex grow z-20">
              <input
                className="flex h-10 border border-slate-400 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Search"
              ></input>
            </div>
            <div className="ml-2 mt-2 hidden lg:block z-20">
              <span className="relative inline-block">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dan_Abromov"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
              </span>
            </div>
          </div>
          <div className="ml-2 lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="w-32 h-12 text-center text-black text-xl font-bold font-['Poppins'] flex items-center justify-center">
                      Chefio.
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                  <div className="ml-3 mt-4 flex items-center space-x-2">
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Dan_Abromov"
                    />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Dan Abromov</span>
                      <span className="text-sm font-medium text-gray-500">@dan_abromov</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
