import { ChevronDown } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 sm:px-8 rounded-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-4 text-xs sm:text-sm text-gray-600">

                <div className="order-last md:order-first text-center md:text-start border-t border-gray-200 md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
                    <span className="mt-2 md:mt-0 font-bold">© 2026 RentYard, Inc.</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center flex-1 gap-4">

                    <div className="flex gap-2 flex-col md:flex-row">
                        <a href="#" className="hover:text-blue-600 transition">Terms</a>
                        <a href="#" className="hover:text-blue-600 transition">Sitemap</a>
                        <a href="#" className="hover:text-blue-600 transition">Privacy</a>
                        <a href="#" className="hover:text-blue-600 transition">Your Privacy Choices</a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <button className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-blue-600 transition py-1 px-2 rounded-lg">
                            Support & resources
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>

                </div>

            </div>
        </footer>

    );
}