/* eslint-disable react/prop-types */

const CatTable = ({ catData }) => {
    const { url, breeds } = catData;
    return (
      <div className="w-full overflow-x-auto rounded-xl bg-white shadow-lg">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                Image
              </th>
              <th className="px-4 py-3 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                Breed
              </th>
              <th className="px-4 py-3 sm:px-6 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 sm:px-6">
                <img
                  src={url}
                  alt="Cat"
                  className="w-20 h-16 sm:w-32 sm:h-32 object-cover rounded-lg"
                />
              </td>
              <td className="px-4 py-3 sm:px-6 text-sm sm:text-base">
                <div className="font-medium text-gray-900">
                  {breeds?.[0]?.name || "Breed name unavailable. Please click 'Get details'"}
                </div>
              </td>
              <td className="px-4 py-3 sm:px-6 text-sm sm:text-base text-gray-500">
                <div className="max-h-24 sm:max-h-32 overflow-y-auto">
                  {breeds?.[0]?.description || "Description not available."}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
export default CatTable;