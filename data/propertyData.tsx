import { Car, Dumbbell, WashingMachine, Wifi, Wind } from "lucide-react";

// ১. Amenities & Facilities Data
export const amenities = [
    { name: "Wifi", icon: <Wifi className="w-4 h-4 text-gray-600" /> },
    { name: "Washer", icon: <WashingMachine className="w-4 h-4 text-gray-600" /> },
    { name: "Free Parking", icon: <Car className="w-4 h-4 text-gray-600" /> },
    { name: "Gym", icon: <Dumbbell className="w-4 h-4 text-gray-600" /> },
    { name: "Dryer", icon: <Wind className="w-4 h-4 text-gray-600" /> },
    { name: "Dryer", icon: <Wind className="w-4 h-4 text-gray-600" /> },
];

// ২. Nearest Education Institution Data
export const educationInstitutions = [
    { name: "Dhaka primary school Dhaka primary school", distance: "2 mile" },
    { name: "Chandipur monosha high school and colleg", distance: "2 mile" },
    { name: "Bangladesh engineering university", distance: "2 mile" },
    { name: "Dhaka Residential Model College", distance: "3.5 mile" },
];

// ৩. Nearest Landmark Data
export const landmarks = [
    { name: "Masjid al-Haram", distance: "05 km" },
    { name: "Masjid an-Nabawi", distance: "05 km" },
    { name: "Al-Aqsa Mosque", distance: "05 km" },
    { name: "Sultan Ahmed Mosque", distance: "05 km" },
    { name: "Eiffel Tower", distance: "12 km" },
];

// ৪. Nearest Station Data
export const stations = [
    { name: "Ticket counter", distance: "05 km" },
    { name: "Bus bays", distance: "05 km" },
    { name: "Shuttle info", distance: "05 km" },
    { name: "Waiting area", distance: "05 km" },
    { name: "Coach stand", distance: "05 km" },
    { name: "Central Railway Station", distance: "08 km" },
];

// ৫. Available Utility Service Data
export const utilityServices = [
    { name: "Pacific Gas and Electric Company", type: "Electricity" },
    { name: "Veolia North America", type: "Water" },
    { name: "National Grid", type: "Gas" },
    { name: "Comcast", type: "Internet" },
    { name: "Verizon 5G Home Internet", type: "Internet" },
];

// ৬. Parking Data (যদি একাধিক অপশন রাখতে চান)
export const parkingDetails = [
    { name: "Attached Garage", type: "2 Spaces" },
    { name: "Street Parking", type: "Available" },
];