import {
    Bath,
    Bed,
    Clock,
    Home,
    Image as ImageIcon,
    MapPin,
    Maximize2
} from "lucide-react";
import Image from "next/image";

export default function FloorPlanList() {
    return (
        <div className="flex gap-5">
            <div className="bg-white border border-gray-100 rounded-3xl  shadow-sm hover:shadow-md transition flex w-full mx-auto p-2">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">

                    {/* Left Section: Image and Details */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-1">

                        {/* Floor Plan Image & Badges */}
                        <div className="relative w-full sm:w-24 h-36 sm:h-24 shrink-0 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                            <Image
                                src="/Rectangle-1.png"
                                alt="Floor Plan"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-1.5 left-1.5 flex gap-1 z-10">
                                <span className="bg-red-500 text-white text-[9px] p-1 rounded-md font-bold shadow">🏷️</span>
                                <span className="bg-red-500 text-white text-[9px] p-1 rounded-md font-bold shadow">🛋️</span>
                            </div>
                        </div>

                        {/* Text Information */}
                        {/* Text Information */}
                        <div className="flex flex-col justify-between flex-1 w-full self-stretch py-0.5">

                            {/* Top Row: Room ID, Availability Badge & Price (All in one line) */}
                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                <div className="flex items-center gap-1 flex-wrap">
                                    <h3 className="font-bold text-base sm:text-sm text-gray-900">#204C</h3>
                                    <span className="bg-blue-50/80 text-blue-800 text-[11px] sm:text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 border border-blue-100/60 shadow-sm">
                                        <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                        Available on 20 May 2025
                                    </span>
                                    {/* Price */}
                                    <div className="flex items-baseline">
                                        <span className="text-base sm:text-sm font-bold text-gray-900">$2000</span>
                                        <span className="text-[11px] sm:text-xs text-gray-400 font-medium">/mo</span>
                                    </div>
                                </div>

                            </div>

                            {/* Middle Row: Specs */}
                            <div className="text-[11px] sm:text-xs text-gray-600 flex items-center gap-4 flex-wrap my-1.5 sm:my-0">
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Bed className="w-3 h-3 text-gray-400" /> 1 Bed shared room
                                </span>
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Bath className="w-3 h-3 text-gray-400" /> Shared
                                </span>
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Maximize2 className="w-3 h-3 text-gray-400" /> 1,250 SF
                                </span>
                            </div>

                            {/* Bottom Row: Links */}
                            <div className="flex items-center gap-4 text-[11px] sm:text-xs text-gray-700 pt-2 border-t border-gray-100 flex-wrap">
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <ImageIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">Gallery</span>
                                </a>
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <Home className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">Amenities</span>
                                </a>
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">1st floor</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Section: Action Buttons */}
                    <div className="flex flex-col gap-2 w-full lg:w-auto pt-2.5 lg:pt-0 border-t lg:border-t-0 border-gray-100 shrink-0">
                        <button className="w-full lg:w-25 text-center py-2 px-2 bg-blue-50/70 hover:bg-blue-100 text-blue-600 rounded-xl text-[11px] sm:text-xs font-semibold transition">
                            Rent details
                        </button>
                        <button className="w-full lg:w-25 text-center py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-xl text-[11px] sm:text-xs font-semibold transition">
                            Tour books
                        </button>
                        <button className="w-full lg:w-25 text-center py-2 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] sm:text-xs font-semibold transition shadow-sm shadow-blue-200">
                            Apply
                        </button>
                    </div>

                </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl  shadow-sm hover:shadow-md transition flex w-full mx-auto p-2">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">

                    {/* Left Section: Image and Details */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 w-full lg:w-auto flex-1">

                        {/* Floor Plan Image & Badges */}
                        <div className="relative w-full sm:w-24 h-36 sm:h-24 shrink-0 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                            <Image
                                src="/Rectangle-1.png"
                                alt="Floor Plan"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-1.5 left-1.5 flex gap-1 z-10">
                                <span className="bg-red-500 text-white text-[9px] p-1 rounded-md font-bold shadow">🏷️</span>
                                <span className="bg-red-500 text-white text-[9px] p-1 rounded-md font-bold shadow">🛋️</span>
                            </div>
                        </div>

                        {/* Text Information */}
                        {/* Text Information */}
                        <div className="flex flex-col justify-between flex-1 w-full self-stretch py-0.5">

                            {/* Top Row: Room ID, Availability Badge & Price (All in one line) */}
                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                <div className="flex items-center gap-1 flex-wrap">
                                    <h3 className="font-bold text-base sm:text-sm text-gray-900">#204C</h3>
                                    <span className="bg-blue-50/80 text-blue-800 text-[11px] sm:text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 border border-blue-100/60 shadow-sm">
                                        <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                        Available on 20 May 2025
                                    </span>
                                    {/* Price */}
                                    <div className="flex items-baseline">
                                        <span className="text-base sm:text-sm font-bold text-gray-900">$2000</span>
                                        <span className="text-[11px] sm:text-xs text-gray-400 font-medium">/mo</span>
                                    </div>
                                </div>

                            </div>

                            {/* Middle Row: Specs */}
                            <div className="text-[11px] sm:text-xs text-gray-600 flex items-center gap-4 flex-wrap my-1.5 sm:my-0">
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Bed className="w-3 h-3 text-gray-400" /> 1 Bed shared room
                                </span>
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Bath className="w-3 h-3 text-gray-400" /> Shared
                                </span>
                                <span className="flex items-center gap-1 font-medium text-gray-700">
                                    <Maximize2 className="w-3 h-3 text-gray-400" /> 1,250 SF
                                </span>
                            </div>

                            {/* Bottom Row: Links */}
                            <div className="flex items-center gap-4 text-[11px] sm:text-xs text-gray-700 pt-2 border-t border-gray-100 flex-wrap">
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <ImageIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">Gallery</span>
                                </a>
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <Home className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">Amenities</span>
                                </a>
                                <a href="#" className="flex items-center gap-1.5 hover:text-blue-600 font-semibold transition group">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="underline underline-offset-4">1st floor</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Section: Action Buttons */}
                    <div className="flex flex-col gap-2 w-full lg:w-auto pt-2.5 lg:pt-0 border-t lg:border-t-0 border-gray-100 shrink-0">
                        <button className="w-full lg:w-25 text-center py-2 px-2 bg-blue-50/70 hover:bg-blue-100 text-blue-600 rounded-xl text-[11px] sm:text-xs font-semibold transition">
                            Rent details
                        </button>
                        <button className="w-full lg:w-25 text-center py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-xl text-[11px] sm:text-xs font-semibold transition">
                            Tour books
                        </button>
                        <button className="w-full lg:w-25 text-center py-2 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] sm:text-xs font-semibold transition shadow-sm shadow-blue-200">
                            Apply
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}