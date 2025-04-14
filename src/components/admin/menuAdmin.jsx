import React from "react";
import {
  HomeIcon,
  FileTextIcon,
  EditIcon,
  UsersIcon,
  BriefcaseIcon,
  StarIcon,
  BuildingIcon,
  SettingsIcon,
  LogOutIcon,
  BellIcon,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <HomeIcon className="w-5 h-5" /> },
  { label: "Submissions", icon: <FileTextIcon className="w-5 h-5" /> },
  { label: "Entries", icon: <EditIcon className="w-5 h-5" /> },
  { label: "Evaluators", icon: <UsersIcon className="w-5 h-5" /> },
  { label: "Categories", icon: <BriefcaseIcon className="w-5 h-5" /> },
  { label: "Reviews", icon: <StarIcon className="w-5 h-5" /> },
  { label: "Clients", icon: <BuildingIcon className="w-5 h-5" /> },
  { label: "Settings", icon: <SettingsIcon className="w-5 h-5" /> },
  { label: "Logout", icon: <LogOutIcon className="w-5 h-5" /> },
];

const Sidebar = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md fixed w-full top-0 z-10">
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800 mr-6">
            Your<span className="text-blue-600">Compass</span>
          </h2>
          <input
            type="text"
            placeholder="Search..."
            className="border px-2 py-1 text-sm rounded-md"
          />
        </div>

        {/* Right: Icons and User Info */}
        <div className="flex items-center space-x-6">
          {/* Notification */}
          <button className="relative">
            <BellIcon className="w-5 h-5 text-gray-700" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Language Selector with Flag */}
          <div className="flex items-center space-x-2">
            <img src="/uk-flag.png" alt="EN" className="w-5 h-5" />
            <span className="text-sm">English</span>
          </div>

          {/* User Avatar and Role */}
          <div className="flex items-center space-x-2">
            <img
              src="/user-avatar.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm leading-tight text-right">
              <div className="font-semibold">L.A.A</div>
              <div className="text-xs text-gray-500">admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-64 h-screen bg-white border-r shadow-sm fixed top-[64px]">
        <ul className="mt-4 space-y-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#c5a76f] hover:text-white cursor-pointer transition"
            >
              {item.icon}
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
