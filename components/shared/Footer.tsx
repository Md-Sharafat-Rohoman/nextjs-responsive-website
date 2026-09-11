import { ChevronDown } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600">

                {/* Left Side: Copyright & Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
                    <span>© 2026 RentYard, Inc.</span>
                    <a href="#" className="hover:text-blue-600 transition">Terms</a>
                    <a href="#" className="hover:text-blue-600 transition">Sitemap</a>
                    <a href="#" className="hover:text-blue-600 transition">Privacy</a>
                    <a href="#" className="hover:text-blue-600 transition">Your Privacy Choices</a>
                </div>

                {/* Right Side: Support & Resources Dropdown */}
                <div className="flex items-center">
                    <button className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600 transition py-1 px-2 rounded-lg">
                        Support & resources
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

            </div>
        </footer>
    );
}