import { ArrowLeftRight, Bell, Calendar, ChevronDown, MapPin, Menu, MessageSquare, Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between gap-5  bg-white border-b pb-5 border-gray-200 sticky top-0 z-50 w-full shadow-sm">
            {/* completed 1 */}
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Image
                    src="/rentyard_icon.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded object-cover shadow-sm"
                />
                <div className="hidden sm:flex items-center gap-2 shrink-0 pr-5 ">
                    <Link href="/">
                        <span className="text-xl sm:text-2xl font-bold tracking-tight text-blue-600 font-sans">
                            RentYard
                        </span>

                    </Link>
                </div>
            </div>

            {/* Center Search Bar Section */}
            <div className="flex items-center bg-white rounded-full p-1.5 shadow-sm border border-gray-200 w-full max-w-xl">

                {/* Country Flag & Dropdown */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 border-r border-gray-200 shrink-0">
                    <Image
                        src="/bangladesh.png"
                        alt="Bangladesh Flag"
                        width={24}
                        height={16}
                        className="rounded object-cover shadow-sm"
                    />
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>

                {/* City or Place Input */}
                <div className="flex items-center gap-1 px-2 py-1 border-r border-gray-200 flex-1 min-w-0">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="City or place"
                        className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-xs sm:text-sm focus:outline-none truncate"
                    />
                </div>

                {/* Move-in Date Input */}
                <div className="flex items-center gap-1 px-2 py-1 flex-1 min-w-0">
                    <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                        type="text"
                        placeholder="Move-in date"
                        className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-xs sm:text-sm focus:outline-none truncate"
                    />
                </div>

                {/* Search Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full flex items-center justify-center transition shadow-sm shrink-0 ml-1">
                    <Search className="w-4 h-4" />
                </button>

            </div>

            {/* Right Actions & Profile Section */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Switch Button */}
                <button className="flex items-center gap-2 text-gray-800 font-medium text-sm hover:text-black transition px-2 py-1">
                    <ArrowLeftRight className="w-5 h-5 text-gray-700" />
                    <span>Switch</span>
                </button>

                {/* List Property Button */}
                <button className="flex items-center gap-2 text-gray-800 font-medium text-sm hover:text-black transition px-2 py-1">
                    <Plus className="w-5 h-5 text-gray-700" />
                    <span>List property</span>
                </button>

                {/* Messages/Chat Icon */}
                <button className="hidden md:flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition bg-white shadow-sm">
                    <MessageSquare className="w-5 h-5 stroke-[1.8]" />
                </button>

                {/* Notifications Icon */}
                <button className="hidden md:flex w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-2xl border border-gray-200 hover:bg-gray-50 text-gray-700 transition bg-white shadow-sm">
                    <Bell className="w-5 h-5 stroke-[1.8]" />
                </button>

                {/* Profile & Menu Box */}
                <button className="hidden md:flex items-center gap-3 px-3 py-1.5 h-11 rounded-2xl border border-gray-200 hover:bg-gray-50 transition bg-white shadow-sm">
                    <Menu className="w-5 h-5 text-gray-700 stroke-[1.8]" />
                    <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-gray-200">
                        <Image
                            src="/man.png"
                            alt="User Profile"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </button>
            </div>
        </nav>
    );
}