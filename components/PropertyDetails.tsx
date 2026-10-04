
"use client";

import {
    Cat,
    Check,
    Copy,
    Dog,
    Heart,
    LayoutGrid,
    MapPin,
    Phone,
    Share2,
    X
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PropertyDetails() {
    const [showAllImages, setShowAllImages] = useState(false);
    const [copied, setCopied] = useState(false);

    const images = [
        "/Rectangle-1.png",
        "/Rectangle-2.png",
        "/Rectangle-3.png",
        "/Rectangle-4.png",
        "/Rectangle-5.png",
        "/Rectangle-1.png",
        "/Rectangle-2.png",
    ];

    const mainImage = images[0];
    const gridImages = images.slice(1, 5);
    const addressText = "Flat/Condo in-H#13 RD#1 Block#A Chadgoan R/A, Bohodarhaat, Chittagong 4212";

    const handleCopy = () => {
        navigator.clipboard.writeText(addressText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-6 w-full  my-5 relative px-4 sm:px-0"> {/* max-w-6xl mx-auto */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[480px]">
                <div className="relative rounded-2xl overflow-hidden shadow-sm group h-[320px] sm:h-[350px] w-full lg:h-full">
                    <Image
                        src={mainImage}
                        alt="Dorm Main View"
                        fill
                        quality={100}
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="flex lg:hidden absolute top-4 right-4 items-center gap-2 z-10">
                        <button className="bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md transition cursor-pointer" title="Share" aria-label="Share property">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md transition cursor-pointer" title="Save" aria-label="Save property">
                            <Heart className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-medium z-10">
                        Dorm name
                    </div>

                    <button
                        onClick={() => setShowAllImages(true)}
                        className="flex lg:hidden absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-900 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium items-center gap-1.5 shadow-md transition z-10 cursor-pointer"
                    >
                        <LayoutGrid className="w-4 h-4" />
                        See more
                    </button>
                </div>

                <div className="hidden lg:grid grid-cols-2 gap-4 h-full">
                    {gridImages.map((imgSrc, index) => {
                        const isLastItem = index === 3;

                        return (
                            <div key={index} className="relative rounded-2xl overflow-hidden shadow-sm group h-full">
                                <Image
                                    src={imgSrc}
                                    alt={`Gallery Image ${index + 2}`}
                                    fill
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />

                                {isLastItem && images.length > 5 && (
                                    <button
                                        onClick={() => setShowAllImages(true)}
                                        className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-gray-900 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-md transition z-10 cursor-pointer"
                                    >
                                        <LayoutGrid className="w-4 h-4" />
                                        {images.length - 5 > 0 ? `+${images.length - 5} See more` : "See more"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {showAllImages && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6">
                    <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto p-6 relative shadow-2xl flex flex-col gap-6">
                        <div className="flex items-center justify-between border-b pb-4 sticky top-0 bg-white z-10">
                            <h3 className="text-lg font-bold text-gray-900">All Photos ({images.length})</h3>
                            <button
                                onClick={() => setShowAllImages(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer"
                            >
                                <X className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {images.map((imgSrc, index) => (
                                <div key={index} className="relative rounded-2xl overflow-hidden shadow-sm h-[250px] sm:h-[300px]">
                                    <Image
                                        src={imgSrc}
                                        alt={`Modal Gallery Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2  pb-2">
                    <div className="flex items-start gap-2.5">
                        <span className="text-gray-800 shrink-0 mt-1">
                            <MapPin className="w-5 h-5" />
                        </span>
                        <h1 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
                            {addressText}
                        </h1>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="text-gray-600 hover:text-gray-900 shrink-0 p-1.5 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                        title="Copy Address"
                    >
                        {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl transition shadow-sm">
                            Manage in dashboard
                        </button>
                        <button className="text-xs sm:text-sm text-gray-700 bg-blue-50/50 border border-blue-100/60 px-4 py-2.5 rounded-xl font-medium shadow-2xs inline-flex lg:hidden">
                            Pet not allowed
                        </button>

                        {/* <div className="text-xs sm:text-sm text-gray-600 bg-gray-50 border border-gray-100 px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs sm:inline-flex hidden"> */}
                        <div className="text-xs sm:text-sm text-gray-600 bg-gray-50 border border-gray-100 px-3.5 py-2 rounded-xl items-center gap-1.5 shadow-xs hidden sm:inline-flex">
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

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-2">
                            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 p-2.5 rounded-xl shadow-xs transition cursor-pointer" title="Share" aria-label="Share property">
                                <Share2 className="w-4 h-4" />
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 p-2.5 rounded-xl shadow-xs transition cursor-pointer" title="Save" aria-label="Save property">
                                <Heart className="w-4 h-4" />
                            </button>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition shadow-sm cursor-pointer" title="See contact number">
                            <Phone className="w-4 h-4" />
                            See contact number
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}