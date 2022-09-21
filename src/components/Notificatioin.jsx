import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import { notificationList } from '../data/dummy';

const Notificatioin = () => {
  const { notificationOpen, currentMode} = useStateContext();
  return (
    notificationOpen && (
      <div className={`w-80 md:w-60 h-4/6 md:h-3/6  shadow-lg fixed top-10 right-32 overflow-scroll rounded ${currentMode === 'Dark'? 'bg-slate-900' : 'bg-white'}`}>
        <h3 className={`p-2 top-2 text-xl  ${currentMode === 'Dark' ? 'text-white' : 'text-gray-700'}`}>Notification</h3>
        <div className="w-full h-full flex-col">
          {notificationList.map((item, index) => {
            const { profile, name, desc, time } = item;
            return (
              <div
                key={index}
                className="flex items-center p-2 my-1 hover:curosor-poiner hover:shadow-lg w-full transition"
              >
                <div className="shadow w-10 h-10 rounded-full shrink-1">
                  <img className="w-full h-full rounded-full" src={profile} alt="profile" />
                </div>
                <div className="flex-col ml-4">
                  <h4 className={`text-md  ${currentMode === 'Dark' ? 'text-white' : 'text-gray-600'}`}>{name}</h4>
                  <p className={`text-sm  ${currentMode === 'Dark' ? 'text-white' : 'text-gray-500'} `}>{desc}</p>
                  <span className={`text-xs  ${currentMode === 'Dark' ? 'text-white' : 'text-gray-400'}`}>{time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  )
}

export default Notificatioin