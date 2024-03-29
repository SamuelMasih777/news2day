import { Fragment } from "react";

export const NewsCard = () => {
  return (
    <Fragment>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/52d7e44ae4b0085bee189cc4/1516668944026-RKIGV3VCLYAZJLUWHZVT/Entertainment+Section+p4.JPG?format=1500w')",
          }}
        ></div>
        <div class="px-5 py-3 bg-zinc-200">
          <h3 class="text-gray-700 uppercase">Chanel</h3>
          <span class="text-gray-500 mt-2">Read...</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/52d7e44ae4b0085bee189cc4/1516668937205-TV2AQWVRKF8HWFVF7PF3/Entertainment+Section+p3.JPG?format=750w')",
          }}
        ></div>
        <div class="px-5 py-3 bg-zinc-200">
          <h3 class="text-gray-700 uppercase">Man Mix</h3>
          <span class="text-gray-500 mt-2">Read...</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/08/64c965f438c996.16365641.jpeg?w=960&h=540&crop=1')",
          }}
        ></div>
        <div class="px-5 py-3 bg-zinc-200">
          <h3 class="text-gray-700 uppercase">Classic watch</h3>
          <span class="text-gray-500 mt-2">Read...</span>
        </div>
      </div>
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
        <div
          class="flex items-end justify-end h-56 w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/person-at-podium.jpeg.jpg')",
          }}
        ></div>
        <div class="px-5 py-3 bg-zinc-200">
          <h3 class="text-gray-700 uppercase">woman mix</h3>
          <span class="text-gray-500 mt-2">Read...</span>
        </div>
      </div>
    </Fragment>
  );
};