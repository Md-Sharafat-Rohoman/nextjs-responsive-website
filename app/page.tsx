import FloorPlanHeader from "@/components/FloorPlanHeader";
import PropertyMapSection from "@/components/Location&Map";
import NearbyPlaces from "@/components/NearbyPlaces";
import PropertyDetails from "@/components/PropertyDetails";
import SimilarProperties from "@/components/SimilarProperties";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/*  className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black" */}
      <PropertyDetails />
      <FloorPlanHeader />
      <NearbyPlaces />
      <PropertyMapSection />
      <SimilarProperties />
    </div >
  );
}
