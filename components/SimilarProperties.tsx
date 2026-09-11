import { ArrowLeft, ArrowRight, BedDouble, Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function SimilarProperties() {
    const properties = [
        {
            id: 1,
            title: "Princess Apartment Building",
            location: "17501 N Dallas Pkwy, Texas, TX, 73301, United States",
            price: "Studio - 3 Beds ($300 - $498)",
            rating: 4.5,
            image: "/Rectangle-1.png"
        },
        {
            id: 2,
            title: "Princess Apartment Building",
            location: "17501 N Dallas Pkwy, Texas, TX, 73301, United States",
            price: "Studio - 3 Beds ($300 - $498)",
            rating: 4.5,
            image: "/Rectangle-1.png"
        },
        {
            id: 3,
            title: "Princess Apartment Building",
            location: "17501 N Dallas Pkwy, Texas, TX, 73301, United States",
            price: "Studio - 3 Beds ($300 - $498)",
            rating: 4.5,
            image: "/Rectangle-1.png"
        },
        {
            id: 4,
            title: "Princess Apartment Building",
            location: "17501 N Dallas Pkwy, Texas, TX, 73301, United States",
            price: "Studio - 3 Beds ($300 - $498)",
            rating: 4.5,
            image: "/Rectangle-1.png"
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
            {/* Header & Navigation Buttons */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Similar Properties
                </h2>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 transition shadow-xs">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Properties Grid (Responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {properties.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col group"
                    >
                        {/* Image Container */}
                        <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />
                            {/* Favorite Heart Button */}
                            <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition">
                                <Heart className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Card Content */}
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