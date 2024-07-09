
import { FaArrowRight, FaCube } from "react-icons/fa"
import logo from "../src/assets/download.png"
import { useState } from "react"
import {  MdKeyboardArrowRight } from "react-icons/md"
import Searchbar from "./Compontents/Searchbar"
import { MdDashboard, MdEmail, MdChat, MdCalendarToday, MdShoppingCart, MdSchool, MdPeople, MdExitToApp } from 'react-icons/md';
import { FaBarsProgress } from "react-icons/fa6"
const sidebarItems = [
  {
    name: "Dashboards",
    icons: <MdDashboard className="text-2xl " />,
    dropDown: [
      { icons: <MdDashboard className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdDashboard className="text-2xl " />, drop: "Dropdown" },
    ],
    space: false
  },
  {
    name: "Another",
    icons: <FaBarsProgress className="text-2xl " />,
    dropDown: [
      { icons: <MdDashboard className="text-2xl " />, drop: "AnoDrop" },
      { icons: <MdDashboard className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },

  {
    name: "Front Page",
    icons: <FaCube className="text-2xl " />,
    dropDown: [
      { icons: <MdDashboard className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdDashboard className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },
  {
    name: "Email",
    icons: <MdEmail className="text-2xl " />,
    dropDown: [
      { icons: <MdEmail className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdEmail className="text-2xl " />, drop: "Dropdown" },
    ],
    space: false
  },
  {
    name: "Chat",
    icons: <MdChat className="text-2xl " />,
    dropDown: [
      { icons: <MdChat className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdChat className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },
  {
    name: "Calendar",
    icons: <MdCalendarToday className="text-2xl " />,
    dropDown: [
      { icons: <MdCalendarToday className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdCalendarToday className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },
  {
    name: "Ecommerce",
    icons: <MdShoppingCart className="text-2xl " />,
    dropDown: [
      { icons: <MdShoppingCart className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdShoppingCart className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },
  {
    name: "Academy",
    icons: <MdSchool className="text-2xl " />,
    dropDown: [
      { icons: <MdSchool className="text-2xl " />, drop: "Dropdown" },
      { icons: <MdSchool className="text-2xl " />, drop: "Dropdown" },
    ],
    space: true
  },
  {
    name: "Users",
    icons: <MdDashboard className="text-secondary text-2xl" />,
    dropDown: [
      { icons: <MdDashboard className="text-2xl " />, drop: "Drodown" },
      { icons: <MdDashboard className="text-2xl " />, drop: "Drodown" },
    ],
    space: false
  },
  {
    name: "Logout",
    icons: <MdDashboard className="text-secondary text-2xl" />,
    dropDown: [
      { icons: <MdDashboard className="text-2xl " />, drop: "Drodown" },
      { icons: <MdDashboard className="text-2xl " />, drop: "Drodown" },
    ],
    space: true
  },

]
function App() {
  const [active, setActive] = useState(true)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const handleMenuActive = (index) => {
     setActiveMenu((ok) => (ok === index ? null : index));

    //  setActiveMenu((prevIndex) => (prevIndex === index ? null : index));

  setActiveDropdown(null);
  }
  return (
    <>
      <div className="flex gap-x-10 pr-6 py-6">
        <div className={`${active ? "w-[25%]" : `w-[6%] justify-centers`} h-screen bg-primary  px-6 relative duration-500 shadow-2xl shadow-[#ccc]`} >
          <div className="flex gap-x-4 items-center">
            <img src={logo} alt="" className="w-[60px] cursor-pointer items-center justify-center"  onMouseOver={() => setActive(true)}/>
            <h1 className={`text-3xl font-semibold ${!active && "hidden"}`}>Vuexy</h1>
            <FaArrowRight className={`absolute right-[-5%] ${!active && "right-[-20%]"} top-[1%] bg-theme p-2 text-4xl rounded-full text-primary cursor-pointer z-[9999] ${active ? "rotate-180" : "rotate-0"} duration-300`} onClick={() => setActive(!active) } onMouseOver={() => setActive(true)} />
          </div>
          <div className="menuItem">
            <ul>
              {
                sidebarItems.map((item, index) => {
                  return (
                    <div>
                      <li className={`text-secondary cursor-pointer text-base p-3 rounded-md flex gap-x-4 items-center mt-2 relative ${!active && "items-center justify-center duration-500 shadow-md shadow-[#ccc]"} ${activeMenu === index ? ` bg-[#7367F0] !text-[#fff]` : "hover:bg-tertiary"}
                      ${item.space === false && "mt-6"}`} key={index}  onClick={() => handleMenuActive(index)} onMouseOver={() => setActive(true)}>
                        <span className="flex items-center justify-center">
                          {item.icons}
                        </span>
                        <div className={`text-xl text-lg duration-500  ${!active && "hidden "}`} >{item.name}</div>
                        <MdKeyboardArrowRight className={`text-2xl font-bold absolute right-[4%] ${!active && "hidden"} ${activeMenu === index ? "rotate-90 " : "rotate-0"}`} />
                      </li>

                      <div className={`${!active && "hidden duration-300"  }`}>
                      {activeMenu === index && (
                        <ul>
                          {item.dropDown.map((dropItem, dropIndex) => (

                            <li key={dropIndex} className={`text-secondary  p-3 flex  gap-x-6 cursor-pointer  mt-2  rounded-md duration-500 ${activeDropdown === dropIndex ? " bg-purple-200" : "bg-tertiary "}`} onClick={() => setActiveDropdown(dropIndex)} onMouseOver={() => setActive(true)}>
                              <span className="flex items-center justify-center" >
                                {dropItem.icons}
                              </span>
                              <div className={`flex justify-start text-lg items-start duration-500 gap-x-6 ${!active && "hidden"}`}> {dropItem.drop} </div>
                            </li>
                          ))}
                        </ul>
                      )}
                      </div>

                    </div>
                  )
                })
              }

            </ul>
          </div>
        </div>
        <div className='h-screen w-full'>
          <Searchbar />
        </div>
      </div>
    </>
  )
}

export default App
