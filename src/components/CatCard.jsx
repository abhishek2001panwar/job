/* eslint-disable react/prop-types */

const CatCard = ({ catData }) => {
    const { url, breeds } = catData;
    return (
      <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={url}
          alt="Cat"
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {breeds?.[0]?.name || "Breed name unavailable. Please click 'Get details'"}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {breeds?.[0]?.description || "No description available."}
          </p>
        </div>
      </div>
    );
  };

export default CatCard;
