import { useState } from "react";
import ButtonGroup from "./components/ButtonGroup";
import CatCard from "./components/CatCard";
import CatTable from "./components/CatTable";
import { fetchRandomCat, fetchCatDetails } from "./Services/api";

function App() {
  const [viewMode, setViewMode] = useState("table");
  const [catData, setCatData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchRandomCat = async () => {
    try {
      setIsLoading(true);
      const randomCat = await fetchRandomCat();
      setCatData(randomCat);
    } catch (error) {
      alert("Failed to fetch cat data: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchCatDetails = async () => {
    if (!catData?.id) {
      alert("Please fetch a random cat first!");
      return;
    }
    try {
      setIsLoading(true);
      const details = await fetchCatDetails(catData.id);
      setCatData(details);
    } catch (error) {
      alert("Failed to fetch cat details: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 md:p-16">
    <div className="max-w-7xl  mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Cat Management Application
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Explore our collection of cat breeds and information
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 sm:mb-8">
        <ButtonGroup
          setViewMode={setViewMode}
          onFetchRandom={handleFetchRandomCat}
          onFetchDetails={handleFetchCatDetails}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Content */}
      <div className="space-y-4 mt-20 ">
        {catData ? (
          viewMode === "card" ? (
            <CatCard catData={catData} />
          ) : (
            <CatTable catData={catData} />
          )
        ) : (
          <div className="text-center py-8 bg-white rounded-xl shadow-lg">
            <p className="text-gray-500 text-sm sm:text-base">
              No cat data available. Click &quot;Random Cat&quot; to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default App;