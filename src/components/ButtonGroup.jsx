/* eslint-disable react/prop-types */

const ButtonGroup = ({ setViewMode, onFetchRandom, onFetchDetails }) => {
    return (
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 w-full max-w-2xl mx-auto">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
          onClick={() => setViewMode("table")}
        >
          Table View
        </button>
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
          onClick={() => setViewMode("card")}
        >
          Card View
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
          onClick={onFetchRandom}
        >
          Random Cat
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm sm:text-base"
          onClick={onFetchDetails}
        >
          Get Details
        </button>
      </div>
    );
  };

    export default ButtonGroup;