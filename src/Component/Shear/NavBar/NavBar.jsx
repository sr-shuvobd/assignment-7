
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { MdAccessTime, MdOutlineQueryStats } from "react-icons/md";
import { NavLink } from "react-router";
import '../../../App.css'

const NavBar = () => {
  return (
    <div className="navbar flex flex-col md:flex-row bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold">Keen<span className="text-[#244d3f]">Keeper</span></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({isActive})=> isActive? "bg-[#244d3f] text-white":""}><IoHomeOutline />Home</NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={({isActive})=> isActive? "bg-[#244d3f] text-white":""}><MdAccessTime />Timeline</NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={({isActive})=> isActive? "bg-[#244d3f] text-white":""}><ImStatsDots />Stats</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
