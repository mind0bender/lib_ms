import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import BookCoverCard from "../../components/bookCoverCard/bookCoverCard";
import { NavLink } from "react-router-dom";
import { BookmarkCheck, HomeIcon, Newspaper, Settings } from "lucide-react";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420,ISBN:9781538742570&format=json"
      )
      .then((res) => {
        console.log(res.data);
        const newBooks = Object.values(res.data);
        console.log(newBooks);
        setBooks(newBooks);
      });
  }, []);

  return (
    <div className={`flex flex-col w-full min-h-screen py-2`}>
      <Navbar />
      <main className={`flex grow w-full px-6 gap-4`}>
        <ul className={`flex flex-col gap-4 px-2`}>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `flex items-center gap-2 grow px-4 py-2 rounded-lg cursor-pointer text-nowrap ${
                  isActive && `bg-secondary`
                }`
              }
              to="/">
              <HomeIcon size={20} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `flex items-center gap-2 grow px-4 py-2 rounded-lg cursor-pointer text-nowrap ${
                  isActive && `bg-secondary`
                }`
              }
              to="/highlights">
              <Newspaper size={20} />
              Highlights
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `flex items-center gap-2 grow px-4 py-2 rounded-lg cursor-pointer text-nowrap ${
                  isActive && `bg-secondary`
                }`
              }
              to="/saved">
              <BookmarkCheck size={20} />
              Saved
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `flex items-center gap-2 grow px-4 py-2 rounded-lg cursor-pointer text-nowrap ${
                  isActive && `bg-secondary`
                }`
              }
              to="/settings">
              <div>
                <Settings size={20} />
              </div>
              Settings
            </NavLink>
          </li>
        </ul>
        <div
          className={`flex flex-col grow items-center justify-center gap-4 bg-secondary rounded-[4rem]`}>
          <div
            className={`flex flex-col md:flex-row justify-between grow w-full p-12 md:p-20 gap-8`}>
            <div className={`flex flex-col grow w-full`}>
              <div
                className={`flex flex-col md:flex-row justify-around grow  items-center gap-8 md:gap-12 flex-wrap`}>
                <div
                  className={`flex gap-8 justify-between items-center flex-wrap`}>
                  <div
                    className={`flex flex-col h-fit gap-8 md:max-w-md justify-center items-center`}>
                    <div className={`text-5xl font-bold uppercase`}>
                      Popular Bestsellers
                    </div>
                    <div>
                      We picked up the most popular books for you, based on your
                      taste.
                      <br />
                      Check it!
                    </div>
                    <button
                      className={`bg-tertiary rounded-md px-4 py-2 font-medium text-white w-fit cursor-pointer text-lg outline-none focus:ring focus:ring-dark duration-200 ease-in-out`}>
                      Watch full list
                    </button>
                  </div>
                  {books.map((book, idx) => {
                    return (
                      <BookCoverCard
                        size={3 - idx}
                        key={book.bib_key}
                        bib_key={book.bib_key}
                        title={book.title}
                        author={book.author}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:flex-row justify-between grow w-full p-12 md:p-20 gap-8`}>
            <div className={`text-5xl font-semibold uppercase max-w-md`}>
              Can be interesting
            </div>
            <div>Check this list of books! Pick up something new</div>
            <div
              className={`flex flex-col md:flex-row justify-around grow  items-baseline gap-8 md:gap-12`}>
              {books.map((book) => {
                return (
                  <BookCoverCard
                    size={1}
                    key={book.bib_key}
                    bib_key={book.bib_key}
                    title={book.title}
                    author={book.author}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
