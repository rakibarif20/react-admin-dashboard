import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { profileSetting } from "../data/dummy";
import userPhoto from "../data/user.jpeg";

const UserProfile = () => {
  const { userProfile,currentMode, setUserProfile } = useStateContext();

  return (
    userProfile && (
      <div className={`w-60 h-96 shadow-lg p-3 fixed top-12 right-10 rounded ${currentMode === 'Dark' ? 'bg-slate-900' : 'bg-white'}`} >
        <h3 className={`p-2 top-2 text-xl mb-3 ${currentMode === 'Dark' ? 'text-white' : 'text-gray-700'}`}>Profile</h3>
        <div className="flex hover:curosor-poiner hover:shadow-lg items-center mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-1">
            <img className="w-full h-full" src={userPhoto} alt="profile image" />
          </div>
          <div className="flex-col items-center ml-2">
            <h3 className={` text-lg  ${currentMode === 'Dark' ? 'text-white' : 'text-gray-600'}`}>Md Rakib Hasan</h3>
            <p className={`text-sm ${currentMode === 'Dark' ? 'text-white' : 'text-gray-500'}`}>Customer</p>
          </div>
        </div>
        <div className="w-full h-full flex-col">
          {profileSetting.map((item, index) => {
            const { icon, name } = item;
            return (
              <div
                key={index}
                className="flex items-center px-3 m-auto my-1 hover:curosor-poiner hover:shadow-lg w-full transition"
              >
                <div className={`w-10 h-10 shrink-1 flex items-center ${currentMode === 'Dark' ? 'text-white' : ''}`}>{icon}</div>
                <p className={`text-base m-0 ${currentMode === 'Dark' ? 'text-white' : 'text-gray-600'}`}>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default UserProfile;
