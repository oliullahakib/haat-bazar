import Banner from "@/components/Home/Banner/Banner";
import NewsLetter from "@/components/Home/NewsLetter/NewsLetter";
import Status from "@/components/Home/Status/Status";
import AllCategories from "@/components/Home/AllCategories/AllCategories";
import TopProducts from "@/components/Home/TopProducts/TopProducts";

export default function Home() {
  return (
  <div className="space-y-7">
    <Banner/>
    <TopProducts/>
    <AllCategories/>
    <NewsLetter/>
    <Status/>
  </div>
  );
}
