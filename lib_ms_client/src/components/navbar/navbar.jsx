import {
  Bookmark,
  BookOpen,
  BriefcaseBusiness,
  Castle,
  ChevronDown,
  Earth,
  Heart,
  Search,
  UserRound,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className={`flex justify-between flex-col w-full px-4 md:px-8 py-6 bg-primary gap-4`}>
      <div className={`flex items-center justify-between grow  gap-4`}>
        <Link to={`/`}>
          <h1 className={`text-2xl text-dark font-bold flex gap-2`}>
            <Bookmark size={32} />
            Bookly
          </h1>
        </Link>
        <label
          htmlFor="search"
          className={`rounded-xl ring flex justify-center items-center gap-4 ring-dark/50 bg-white grow max-w-md px-4`}>
          <Search size={24} />
          <input
            id={`search`}
            className={`grow py-2 placeholder:text-dark outline-none`}
            type={`text`}
            placeholder={"Search name of the Book or the Author..."}
          />
        </label>
        <div className={`flex items-center gap-2`}>
          <div className={"rounded-full p-2 bg-white border border-dark/50"}>
            <UserRound size={24} />
          </div>
          <span>Yash</span>
          <ChevronDown />
        </div>
      </div>
      <div className={`flex justify-between gap-4 items-center`}>
        <ul className={`flex grow gap-1 items-center justify-center`}>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books`}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/fantasy`}>
              <Castle size={16} />
              Fantasy
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/drama`}>
              <Heart size={16} />
              Drama
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/detective`}>
              <Search size={16} />
              Detective
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/education`}>
              <BookOpen size={16} />
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/psychology`}>
              {/* <Brain size={16} /> */}
              <Earth size={16} />
              Psychology
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex items-center py-2 px-4 ${
                  isActive && "bg-tertiary text-white font-medium "
                } rounded-md w-full gap-2`
              }
              to={`/books/business`}>
              <BriefcaseBusiness size={16} />
              Business
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
