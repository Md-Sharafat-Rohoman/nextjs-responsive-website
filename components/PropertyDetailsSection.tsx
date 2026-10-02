"use client";

import { amenities, educationInstitutions, landmarks, stations, utilityServices } from "@/data/propertyData";
import { useState } from "react";

const PropertyDetailsSection = () => {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, 5);

  const [showAllEdu, setShowAllEdu] = useState(false);

  const visibleEdu = showAllEdu ? educationInstitutions : educationInstitutions.slice(0, 3);

  const [showAllLandmarks, setShowAllLandmarks] = useState(false);

  const visibleLandmarks = showAllLandmarks ? landmarks : landmarks.slice(0, 4);

  const [showAllStations, setShowAllStations] = useState(false);

  const visibleStations = showAllStations ? stations : stations.slice(0, 5);

  const [showAllUtilities, setShowAllUtilities] = useState(false);
  const visibleUtilities = showAllUtilities ? utilityServices : utilityServices.slice(0, 4);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-white">

      {/* About this property */}
      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">About this property</h2>
        <p className="text-gray-600 text-sm">
          Explore this spacious and beautifully designed property that offers modern living with comfort and style.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Amenities and facilities */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Amenities and facilities</h2>
        <div className="flex flex-wrap items-center gap-3">
          {visibleAmenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm"
            >
              {item.icon}
              <span className="text-gray-700 font-medium text-sm">{item.name}</span>
            </div>
          ))}

          <button
            onClick={() => setShowAllAmenities(!showAllAmenities)}
            className="bg-blue-50 text-blue-600 font-medium px-4 py-2 rounded-full hover:bg-blue-100 transition-colors text-sm"
          >
            {showAllAmenities ? "Show less" : "View more"}
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Nearest education institution */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Nearest education institution</h2>
        <div className="flex flex-wrap items-center gap-4">
          {visibleEdu.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm min-w-[250px]"
            >
              <span className="text-gray-700 font-medium text-sm truncate max-w-[200px]" title={item.name}>
                {item.name}
              </span>
              <span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded ml-3 shrink-0">
                {item.distance}
              </span>
            </div>
          ))}

          <button
            onClick={() => setShowAllEdu(!showAllEdu)}
            className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm"
          >
            {showAllEdu ? "Show less" : "View more"}
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Nearest landmark */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Nearest landmark</h2>
        <div className="flex flex-wrap items-center gap-4">
          {visibleLandmarks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm min-w-[200px]"
            >
              <span className="text-gray-700 font-medium text-sm">{item.name}</span>
              <span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded ml-3">
                {item.distance}
              </span>
            </div>
          ))}

          <button
            onClick={() => setShowAllLandmarks(!showAllLandmarks)}
            className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm"
          >
            {showAllLandmarks ? "Show less" : "View more"}
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Nearest station */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Nearest station</h2>
        <div className="flex flex-wrap items-center gap-4">
          {visibleStations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm min-w-[180px]"
            >
              <span className="text-gray-700 font-medium text-sm">{item.name}</span>
              <span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded ml-3">
                {item.distance}
              </span>
            </div>
          ))}

          <button
            onClick={() => setShowAllStations(!showAllStations)}
            className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm"
          >
            {showAllStations ? "Show less" : "View more"}
          </button>
        </div>
      </div>
      {/* Available utility service section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Available utility service</h2>
        <div className="flex flex-wrap items-center gap-4">
          {visibleUtilities.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm"
            >
              <span className="text-gray-700 font-medium text-sm mr-3">{item.name}</span>
              <span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded">
                {item.type}
              </span>
            </div>
          ))}

          <button
            onClick={() => setShowAllUtilities(!showAllUtilities)}
            className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm"
          >
            {showAllUtilities ? "Show less" : "View more"}
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Parking section */}
      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">Parking</h2>
        <p className="text-gray-600 text-sm">
          Explore this spacious and beautifully designed property that offers modern living with comfort and style. Located in a prime area,
        </p>
      </div>

    </div>
  );
};

export default PropertyDetailsSection;