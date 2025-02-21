import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`flex justify-between bg-primary text-gray-800 py-4 px-8`}>
      <div className={`text-2xl font-bold text-black`}>Library MS</div>
      <ul className={`flex justify-between items-center gap-4`}>
        <li className={`hover:text-black`}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`hover:text-black`}>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li className={`hover:text-black`}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className={`hover:text-black`}>
          <NavLink to="/Register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}
