import {
    Cat,
    Copy,
    Dog,
    Heart,
    LayoutGrid,
    MapPin,
    Phone,
    Share2
} from "lucide-react";
import Image from "next/image";

export default function PropertyDetails() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto my-5">
            {/* Image Gallery Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[480px]">
                {/* Main Big Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm group h-[300px] sm:h-[400px] lg:h-full">
                    <Image
                        src="/Rectangle-1.png"
                        alt="Dorm Main View"
                        fill
                        quality={100}
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                        Dorm name
                    </div>
                </div>

                {/* Right Side 4 Grid Images */}
                <div className="grid grid-cols-2 gap-4 h-[300px] sm:h-[400px] lg:h-full">
                    {/* Bedroom */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group h-full">
                        <Image
                            src="/Rectangle-2.png"
                            alt="Bedroom"
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Dining View */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group h-full">
                        <Image
                            src="/Rectangle-3.png"
                            alt="Dining View"
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Interior */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group h-full">
                        <Image
                            src="/Rectangle-4.png"
                            alt="Interior"
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Living Room with 'See more' button */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm group h-full">
                        <Image
                            src="/Rectangle-5.png"
                            alt="Living Room"
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />

                        <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-gray-900 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-md transition z-10">
                            <LayoutGrid className="w-4 h-4" />
                            See more
                        </button>
                    </div>
                </div>
            </section>

            {/* Details & Info Section */}
            <div className="">
                {/* bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm */}
                {/* Address Header with Bottom Border */}
                <div className="flex items-start sm:items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                        <span className="text-gray-800 shrink-0">
                            <MapPin className="w-5 h-5" />
                        </span>
                        <h1 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                            Flat/Condo in-H#13 RD#1 Block#A Chadgoan R/A, Bohodarhaat, Chittagong 4212
                        </h1>
                    </div>
                    <button className="text-gray-500 hover:text-gray-800 shrink-0 p-1 rounded-lg hover:bg-gray-50 transition" title="Copy Address">
                        <Copy className="w-5 h-5" />
                    </button>
                </div>

                {/* Bottom Section (Buttons & Pets) */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-4">
                    <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition shadow-sm">
                            Manage in dashboard
                        </button>
                        <div className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 flex-wrap">
                            <span className="font-normal text-gray-500">Allowed pet</span>
                            <span className="text-gray-300">•</span>
                            <span className="flex items-center gap-1 text-gray-700 font-medium">
                                <Cat className="w-4 h-4" /> Cat
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="flex items-center gap-1 text-gray-700 font-medium">
                                <Dog className="w-4 h-4" /> Dog
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
                        <button className="text-gray-500 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition" title="Share" aria-label="Share property">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition" title="Save" aria-label="Save property">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition shadow-sm" title="See contact number">
                            <Phone className="w-4 h-4" />
                            See contact number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}