"use client";

import { ArrowLeft, ArrowRight, BedDouble, Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    rating: number;
    image: string;
}

export default function SimilarProperties() {
    const properties: Property[] = [
        { id: 1, title: "Princess Apartment Building 1", location: "17501 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($300 - $498)", rating: 4.5, image: "/Rectangle-1.png" },
        { id: 2, title: "Princess Apartment Building 2", location: "17502 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($320 - $500)", rating: 4.6, image: "/Rectangle-1.png" },
        { id: 3, title: "Princess Apartment Building 3", location: "17503 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($350 - $550)", rating: 4.4, image: "/Rectangle-1.png" },
        { id: 4, title: "Princess Apartment Building 4", location: "17504 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($280 - $450)", rating: 4.7, image: "/Rectangle-1.png" },
        { id: 5, title: "Princess Apartment Building 5", location: "17505 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($400 - $600)", rating: 4.3, image: "/Rectangle-1.png" },
        { id: 6, title: "Princess Apartment Building 6", location: "17506 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($310 - $480)", rating: 4.8, image: "/Rectangle-1.png" },
        { id: 7, title: "Princess Apartment Building 7", location: "17507 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($330 - $520)", rating: 4.2, image: "/Rectangle-1.png" },
        { id: 8, title: "Princess Apartment Building 8", location: "17508 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($390 - $590)", rating: 4.9, image: "/Rectangle-1.png" },
        { id: 9, title: "Princess Apartment Building 9", location: "17509 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($300 - $470)", rating: 4.5, image: "/Rectangle-1.png" },
        { id: 10, title: "Princess Apartment Building 10", location: "17510 N Dallas Pkwy, Texas, TX", price: "Studio - 3 Beds ($340 - $530)", rating: 4.6, image: "/Rectangle-1.png" },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            // Ekhane 320 bole dilam, jate protibar click korle ekta card-er soman width scroll hoy
            const scrollAmount = 320;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full  py-8 space-y-6"> {/* max-w-7xl mx-auto */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Similar Properties
                </h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handleScroll("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-blue-700 hover:text-white  transition shadow-sm cursor-pointer border-2 border-blue-500"
                        aria-label="Scroll Left"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => handleScroll("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-blue-700 hover:text-white  transition shadow-sm cursor-pointer  border-2 border-blue-500"
                        aria-label="Scroll Right"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex items-stretch gap-5 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {properties.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[100%] sm:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] snap-start bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col group shrink-0"
                    >
                        <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />
                            <button
                                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition cursor-pointer"
                                aria-label="Save to favorites"
                            >
                                <Heart className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                            <div className="space-y-1.5">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-bold text-sm sm:text-base text-gray-900 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-800 shrink-0">
                                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                        {item.rating}
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500 flex items-start gap-1 line-clamp-2">
                                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                                    {item.location}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-gray-100 text-xs font-medium text-gray-700 flex items-center gap-1.5">
                                <BedDouble className="w-4 h-4 text-gray-400 shrink-0" />
                                <span className="truncate">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}