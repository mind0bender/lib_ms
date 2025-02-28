import { PropTypes } from "prop-types";

export default function BookCoverCard({ bib_key, title, author, size = 60 }) {
  return (
    <div title={title} className={`grow flex justify-center items-center`}>
      <img
        className={`${
          size === 1
            ? `w-28 md:w-36 lg:w-48`
            : size === 2
            ? `w-32 md:w-40 lg:w-60`
            : `w-40 md:w-48 lg:w-80`
        } aspect-[3/4] rounded-xl h-fit border border-primary `}
        src={`https://covers.openlibrary.org/b/${bib_key.slice(
          0,
          4
        )}/${bib_key.slice(5)}-L.jpg`}
        alt={title}
      />
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  );
}

BookCoverCard.propTypes = {
  bib_key: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  size: PropTypes.number,
};
