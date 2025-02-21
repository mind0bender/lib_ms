import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className={`bg-primary text-black px-8 py-10 flex flex-col gap-3 justify-center items-center border-t border-purple-400`}>
      <div className={`flex gap-4 justify-around w-full max-w-6xl`}>
        <div className={`flex flex-col gap-5 w-1/3`}>
          <h1 className={`text-lg font-bold`}>Library Management System</h1>
          <div className={`text-sm`}>
            Your one-stop solution for managing library resources efficiently.
          </div>
        </div>
        <div className={`flex flex-col gap-5`}>
          <h1 className={`text-lg font-bold`}>Library Management System</h1>
          <ul className={`text-sm flex flex-col gap-2`}>
            <li>
              <Link to={`/about`}>About Us</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={`flex flex-col gap-5`}>
          <h1 className={`text-lg font-bold`}>Contact Info</h1>
          <ul className={`text-sm flex flex-col gap-2`}>
            <li>
              Email:{" "}
              <Link to={`mailto:library@cuchd.in`}>library@cuchd.in</Link>
            </li>
            <li>
              Phone: <Link to={`tel:1234567890`}>1234567890</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className={`w-10/12 my-4 border-t border-stone-700`} />
      <div className={`text-sm`}>
        © 2025 Library Management System. All rights reserved.
      </div>
    </footer>
  );
}
