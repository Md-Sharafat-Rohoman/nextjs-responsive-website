import {
    Car,
    Dumbbell,
    WashingMachine,
    Wifi,
    Wind
} from "lucide-react";

export default function NearbyPlaces() {
    return (
        <div className="mt-10 space-y-8 bg-white text-gray-800">

            {/* 1. About this property */}
            <section className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">About this property</h2>
                <p className="text-sm sm:text-base text-gray-600">
                    Explore this spacious and beautifully designed property that offers modern living with comfort and style.
                </p>
            </section>

            <hr className="border-gray-100" />

            {/* 2. Amenities and facilities */}
            <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Amenities and facilities</h2>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <Wifi className="w-4 h-4 text-gray-500" /> Wifi
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <WashingMachine className="w-4 h-4 text-gray-500" /> Washer
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <Car className="w-4 h-4 text-gray-500" /> Free Parking
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <Dumbbell className="w-4 h-4 text-gray-500" /> Gym
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <Wind className="w-4 h-4 text-gray-500" /> Dryer
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-xs sm:text-sm font-semibold transition">
                        View more
                    </button>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* 3. Nearest education institution */}
            <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Nearest education institution</h2>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span className="truncate max-w-[200px] sm:max-w-xs">Dhaka primary school Dhaka primary school</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md shrink-0">2 mile</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span className="truncate max-w-[200px] sm:max-w-xs">Chandipur monosha high school and colleg</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md shrink-0">2 mile</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span className="truncate max-w-[200px] sm:max-w-xs">Bangladesh engineering university</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md shrink-0">2 mile</span>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-xs sm:text-sm font-semibold transition">
                        View more
                    </button>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* 4. Nearest landmark */}
            <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Nearest landmark</h2>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Masjid al-Haram</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Masjid an-Nabawi</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Al-Aqsa Mosque</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Sultan Ahmed Mosque</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-xs sm:text-sm font-semibold transition">
                        View more
                    </button>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* 5. Nearest station */}
            <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Nearest station</h2>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Ticket counter</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Bus bays</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Shuttle info</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Waiting area</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Coach stand</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">05 km</span>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-xs sm:text-sm font-semibold transition">
                        View more
                    </button>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* 6. Available utility service */}
            <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Available utility service</h2>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Pacific Gas and Electric Company</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">Electricity</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Veolia North America</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">Water</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>National Grid</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">Gas</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium text-gray-700 bg-white shadow-xs">
                        <span>Comcast</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md">Internet</span>
                    </div>
                    <button className="flex items-center gap-1 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl text-xs sm:text-sm font-semibold transition">
                        View more
                    </button>
                </div>
            </section>

            <hr className="border-gray-100" />

            {/* 7. Parking */}
            <section className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Parking</h2>
                <p className="text-sm sm:text-base text-gray-600">
                    Explore this spacious and beautifully designed property that offers modern living with comfort and style. Located in a prime area,
                </p>
            </section>

        </div>
    );
}