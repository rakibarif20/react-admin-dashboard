import React from "react";
import { Link, NavLink } from "react-router-dom";
// import {FiSetting} from 'react-icons/fi';
import { FaReact } from "react-icons/fa";
// import { SiShopware } from "react-icons/si";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } = useStateContext();

  const handleClose = () => {
    if (activeMenu !== undefined && screenSize >= 900) {
      setActiveMenu(false);
    }
    if (screenSize <= 900) {
      setActiveMenu((prevMenu) => !prevMenu);
    }
  };
  const isActive = false;
  const activeLink = "flex items-center gap-5 pl-4 md:pl-2 pt-2 pb-2.5 rounded-lg text-white text-md m-2 md:m-0";
  const normalLink =
    "flex items-center gap-5 pl-4 md:pl-2 pt-3 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 md:m-0 ";
  return (
    <div
      className={` ${
        currentMode === "Dark" ? "dark" : ""
      } ml-3 h-screen hover:overflow-y-auto overflow-auto md:hover:overflow-auto pb-10 transition`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center transition ">
            <Link
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              to="/"
              onClick={handleClose}
            >
              <FaReact /> <span>React</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={handleClose}
                className="text-xl rounded-full p-3 dark:text-white hover:bg-light-gray dark:hover:bg-red-600 mt-4 block d"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase flex justify-between items-center">
                  {item.title} <BsChevronDown />
                </p>

                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
