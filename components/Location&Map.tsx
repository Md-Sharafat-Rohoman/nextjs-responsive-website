"use client";

import { useState } from "react";

export default function PropertyMapSection() {
    const [mapType, setMapType] = useState<"default" | "satellite">("default");
    const [zoom, setZoom] = useState<number>(15);

    const lat = 35.68536067258957;
    const lng = 139.74543297684346;

    const mapSrc = mapType === "default"
        ? `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
        : `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=${zoom}&output=embed`;

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 1, 20));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 1, 10));
    };

    return (
        <section className="space-y-4  rounded-lg">
            {/* Section Header */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Location & Map</h2>

            {/* Map Container */}
            <div className="relative w-full h-[350px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">

                {/* Scale বাড়িয়ে ১.২৫ করা হলো যাতে নিচের লোগো বা অংশটুকু পুরোপুরি ক্রপ হয়ে যায় */}
                <iframe
                    title="Property Location Map"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full scale-[1.25] origin-center transition-all duration-300"
                ></iframe>

                {/* Top-Left View Switcher Buttons (Default & Satellite View) */}
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-md flex items-center gap-1 border border-gray-100">
                    <button
                        onClick={() => setMapType("default")}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${mapType === "default"
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-gray-700 hover:bg-gray-100/80"
                            }`}
                    >
                        Default
                    </button>
                    <button
                        onClick={() => setMapType("satellite")}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${mapType === "satellite"
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-gray-700 hover:bg-gray-100/80"
                            }`}
                    >
                        Satellite View
                    </button>
                </div>

                {/* Top-Right Custom Zoom Controls (+ / -) */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 flex flex-col overflow-hidden">
                    <button
                        onClick={handleZoomIn}
                        className="w-10 h-10 hover:bg-gray-100 text-gray-700 transition cursor-pointer border-b border-gray-100 flex items-center justify-center font-bold text-xl leading-none"
                        title="Zoom In"
                    >
                        +
                    </button>
                    <button
                        onClick={handleZoomOut}
                        className="w-10 h-10 hover:bg-gray-100 text-gray-700 transition cursor-pointer flex items-center justify-center font-bold text-xl leading-none"
                        title="Zoom Out"
                    >
                        −
                    </button>
                </div>

            </div>
        </section>
    );
}