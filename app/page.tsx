import FloorPlanHeader from "@/components/FloorPlanHeader";
import PropertyMapSection from "@/components/Location&Map";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyDetailsSection from "@/components/PropertyDetailsSection";
import SimilarProperties from "@/components/SimilarProperties";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <PropertyDetails />
      <FloorPlanHeader />
      {/* <NearbyPlaces /> */}
      <PropertyDetailsSection />
      <PropertyMapSection />
      <SimilarProperties />

    </div >
  );
}
