import PropTypes from "prop-types";
const SpentTime = ({ time }) => {
  return (
    <div className="bg-gray-300 p-4 rounded">
      <h1 className="text-2xl text-center font-bold text-blue-500">
        Spent time on read: {time} min
      </h1>
    </div>
  );
};
SpentTime.propTypes = {
  time: PropTypes.number,
};

export default SpentTime;
