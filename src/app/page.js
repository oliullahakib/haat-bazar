import Banner from "@/components/Home/Banner/Banner";
import NearestProduct from "@/components/Home/NearestProducts/NearestProduct";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import Status from "@/components/Home/Status/Status";
import Image from "next/image";

export default function Home() {
  return (
  <div className="space-y-7">
    <Banner/>
    <NearestProduct/>
    <NewsLetter/>
    <Status/>
  </div>
  );
}
