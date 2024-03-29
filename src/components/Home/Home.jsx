import { Fragment } from "react";
import { Card } from "../Card/Card";
import { Banner } from "../Banner/Banner";
import { BanCard } from "../BannerCard/BanCard";
import { NewsCard } from "../NewsCard/NewsCard";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { CardTech } from "../Card/Card1";
import { CardPolitics } from "../Card/CardPolitics";
import breakingnews from "../../assets/gif/breakingnews.gif";
export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <div class="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {/* <div className="relative overflow-hidden col-span-1"> */}
          <CardTech />
        {/* </div> */}
        {/* <div className="relative overflow-hidden col-span-1"> */}
          <CardPolitics />
          <CardTech />
          <CardPolitics />
        {/* </div> */}
        {/* <div className="relative overflow-hidden col-span-full sm:col-span-2 lg:col-span-1 xl:col-span-1 "> */}
          {/* <img
            src={breakingnews}
            alt="News_Gif"
            className="w-full h-auto rounded-lg"
          /> */}
        {/* </div> */}
      </div>
      <div>
        <main class="my-8">
          <div class="container mx-auto px-6">
            <Banner />
            <div class="md:flex mt-8 md:-mx-4">
              <BanCard />
            </div>
            <div class="mt-16">
              <h3 class="text-gray-200 text-2xl font-medium text-center">
                Fashions
              </h3>
              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <NewsCard />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};
// export default Home;
