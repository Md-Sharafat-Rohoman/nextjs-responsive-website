import { ChevronDown, LayoutGrid } from "lucide-react";
import FloorPlanList from "./FloorPlanList";

export default function FloorPlanHeader() {
    return (
        <section>
            <div className="flex items-center justify-between gap-2 my-6">
                {/* Title & Tag */}
                <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-lg font-bold text-gray-900">Floor plan & rent</h1>
                    <span className="bg-orange-50 text-orange-600 text-[11px] font-semibold px-2 py-0.5 rounded border border-orange-200">
                        Hostel/Dorm
                    </span>
                </div>

                {/* Actions (Button & Sort Dropdown) */}
                <div className="flex items-center gap-2">
                    {/* Grid View Toggle Button */}
                    <button className="bg-blue-600 text-white p-2 rounded-lg shadow-sm hover:bg-blue-700 transition flex items-center justify-center">
                        <LayoutGrid className="h-4 w-4" />
                    </button>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            aria-label="Sort properties"
                            className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-3 pr-7 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-xs cursor-pointer"
                        >
                            <option>Sort by</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <ChevronDown className="h-3 w-3" />
                        </div>
                    </div>
                </div>
            </div>
            <FloorPlanList />

        </section>
    );
}