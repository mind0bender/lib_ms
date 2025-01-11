import PropTypes from "prop-types";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 justify-center w-full md:w-[36rem] border border-slate-200`}>
      <div className={`flex gap-4 items-center`}>
        <div className={``}>{icon}</div>
        <h3 className={`font-bold text-2xl`}>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
