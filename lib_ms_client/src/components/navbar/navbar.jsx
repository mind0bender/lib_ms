import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/cu.png";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between items-center bg-primary-700 text-white py-4 px-6">
        <li>
          <Link
            to={`/`}
            className="text-2xl font-bold flex justify-center items-center gap-4">
            <img src={Logo} alt="logo" className="h-12" />
            CU Library
          </Link>
        </li>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              className={({ isActive }) => `${isActive && "underline"}`}
              to={`/`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive && "underline"}`}
              to={`/about`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive && "underline"}`}
              to={`/contact`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
