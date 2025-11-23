import Banner from "@/components/Home/Banner/Banner";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import Status from "@/components/Home/Status/Status";
import Image from "next/image";

export default function Home() {
  return (
  <div className="space-y-7">
    <Banner/>
    <NewsLetter/>
    <Status/>
  </div>
  );
}
