"use client";

import { useState } from "react";

const Landmarks = () => {
    const [showAll, setShowAll] = useState(false);

    const landmarks = [
        { name: "Masjid al-Haram", distance: "05 km" },
        { name: "Masjid an-Nabawi", distance: "05 km" },
        { name: "Al-Aqsa Mosque", distance: "05 km" },
        { name: "Sultan Ahmed Mosque", distance: "05 km" },
        { name: "Eiffel Tower", distance: "12 km" },
        { name: "Statue of Liberty", distance: "25 km" },
    ];

    const visibleLandmarks = showAll ? landmarks : landmarks.slice(0, 4);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Nearest landmark</h2>

            <div className="flex flex-wrap items-center gap-4">
                {visibleLandmarks.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm min-w-[200px]"
                    >
                        <span className="text-gray-700 font-medium">{item.name}</span>
                        <span className="text-gray-400 text-sm bg-gray-100 px-2 py-0.5 rounded ml-3">
                            {item.distance}
                        </span>
                    </div>
                ))}

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-blue-50 text-blue-600 font-medium px-5 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                >
                    {showAll ? "Show less" : "View more"}
                </button>
            </div>
        </div>
    );
};

export default Landmarks;