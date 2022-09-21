import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Line,
  Finnacial,
  ColorMapping,
  ColorPicker,
  Editor,
} from "./pages/Charts";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const [scroll, setScroll] = useState(150);
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    setUserProfile,
    userProfile,
    windowScroll,
    setWindowScroll,
    chatOpen,
    notificationOpen,
    setChatOpen,
    setNotificationOpen,
  } = useStateContext();
  // const windowScroll =  window.scrollY >= 150;
  // console.log(activeMenu);
  // console.log('setTheme',themeSettings)
  useEffect(() => {
    const addScroll = () => {
      if (chatOpen || notificationOpen || userProfile) {
        if (window.scrollY >= 150) {
          setChatOpen(false);
          setNotificationOpen(false);
          setUserProfile(false);
        }
      }
    };
    window.addEventListener("scroll", addScroll);
    return () => window.removeEventListener("scroll", addScroll);
  }, [chatOpen,notificationOpen,userProfile]);

  // if(window.scrollY >= 200) {
  //   setUserProfile(false);
  // }

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{
              zIndex: "1000",
            }}
          >
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: currentColor,
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className={`${
                currentMode === "Dark" ? "bg-slate-900" : ""
              } w-72 md:w-56 fixed sidebar dark:bg-scondary-dark-bg bg-light transition`}
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg transition">
              <Sidebar />
            </div>
          )}
          <div
            className={`${currentMode === "Dark" ? "bg-slate-900" : ""} ${
              activeMenu ? "w-full min-h-screen ml-72 md:ml-56" : "w-full md:w-full min-h-screen flex-2"
            }`}
          >
            <div className={`fixed md:static navbar w-full bg-main-bg shadow`}>
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSetting />}
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Finnacial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
