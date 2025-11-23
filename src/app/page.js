import Banner from "@/components/Home/Banner/Banner";
import NearestProduct from "@/components/Home/TopProducts/TopProducts";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import Status from "@/components/Home/Status/Status";
import AllCategories from "@/components/Home/AllCategories/AllCategories";

export default function Home() {
  return (
  <div className="space-y-7">
    <Banner/>
    <NearestProduct/>
    <AllCategories/>
    <NewsLetter/>
    <Status/>
  </div>
  );
}
