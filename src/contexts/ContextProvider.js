import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [windowScroll,setWindowScroll] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(false);

  const setProfile = () => {
    setUserProfile((prevProfile) => !prevProfile);
    if (chatOpen) {
      setChatOpen(false);
    }
    if (notificationOpen) {
      setNotificationOpen(false);
    }
    document.addEventListner('scroll', ()=>{
      if(window.scrollY >= 150){
        setUserProfile(false)
      }
  })
  };
  const setNotification = () => {
    setNotificationOpen((prevNotification) => !prevNotification);
    if (chatOpen) {
      setChatOpen(false);
    }
    if (userProfile) {
      setUserProfile(false);
    }

  };
  const setChat = () => {
    setChatOpen((prevChat) => !prevChat);
    if (notificationOpen) {
      setNotificationOpen(false);
    }
    if (userProfile) {
      setUserProfile(false);
    }
    // console.log("chat clicked", chatOpen);
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    setThemeSettings(false);
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (e) => {
    setCurrentColor(e);
    setThemeSettings(false);
    localStorage.setItem("colorMode", e.target.value);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        windowScroll,
        setWindowScroll,
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
        chatOpen,
        setChatOpen,
        setChat,
        notificationOpen,
        setNotificationOpen,
        setNotification,
        userProfile,
        setUserProfile,
        setProfile,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
