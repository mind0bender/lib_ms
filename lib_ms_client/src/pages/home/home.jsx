import { Search } from "lucide-react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={`flex flex-col grow`}>
        <div
          className={`w-full text-center bg-primary border-b border-purple-400`}>
          <h1 className={`text-4xl font-bold text-black px-10 py-20`}>
            Welcome to Library Management System
          </h1>
        </div>
        <div className={`grow bg-tertiary`}>
          <div
            className={`p-8 m-8 rounded-full bg-secondary flex justify-around items-center shadow-lg`}>
            <div className={`w-1/2 flex`}>
              <input
                className={`px-4 py-3 grow rounded-l-full outline-none border border-r-0 border-purple-400`}
                type="text"
                placeholder={"Search for books..."}
              />
              <button
                className={`px-4 py-3 rounded-r-full bg-primary text-white hover:bg-purple-900 border border-l-0 border-purple-400`}>
                <Search size={24} />
              </button>
            </div>
            <Link to={`checkinout`}>
              <button
                className={`px-4 py-3 bg-primary rounded-md hover:text-white hover:bg-purple-900 duration-100 border border-purple-400`}>
                In/Out
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className={`text-lg font-bold`}>Popular Books</div>
          <div></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
