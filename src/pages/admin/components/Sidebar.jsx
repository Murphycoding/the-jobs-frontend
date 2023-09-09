import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from './data/dummy';
import Logo from "../../../assets/logo-3.png";
import { useStateContext } from './contexts/ContextProvider';
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}
const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState (initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false); 

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between items-center'> 
        <Link to="/" onClick={handleCloseSidebar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
        <img
            className="md:h-10 h-8"
            src={Logo}
            alt="Logo"
          />  
        </Link>
          {/* <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=> !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
            <MdOutlineCancel /> 
          </button> */}
      </div>
      <div className='m-10'>
        {links.map((item) => (
          <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
             {item.title} 
            </p>
            {item.links.map((link) => (
              <NavLink to={`/${link.url}`} key={link.name} onClick={handleCloseSidebar} style={({ isActive }) => ({backgroundColor: isActive ? currentColor:''})}
              className={({ isActive }) => isActive ? activeLink : normalLink}>
                {link.icon}
                <span className='capitalize'>
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))} 

      </div>
      </>)}
    </div>
  )
}

export default Sidebar