import { DownloadIcon } from '@heroicons/react/outline';
import BannerImg from 'assets/images/banner.svg';
import React from 'react';

function Banner() {
  return (
    <div className="pb-8 bg-discord_blue mb:pb-0">
      <div className="relative h-screen p-7 py-9 md:h-83vh md:flex md:items-start">
        <div className="flex flex-col items-center gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-5xl font-bold text-white">IMAGINE A PLACE...</h1>
          <h2 className="w-full text-lg font-light tracking-wide text-white lg:max-w-3xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h2>
          <div className="flex flex-col w-full gap-6 sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center">
            <button className="flex items-center justify-center p-4 text-lg font-medium transition duration-200 ease-in-out bg-white rounded-full w-60 hover:shadow-2xl hover:text-discord_blurple focus:outline-none">
              <DownloadIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button className="flex items-center justify-center p-4 text-lg font-medium text-white transition duration-200 ease-in-out bg-gray-900 rounded-full w-72 hover:shadow-2xl hover:bg-gray-800 focus:outline-none">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src={BannerImg}
            alt="banner"
            className=" h-80 w-80 md:inline bg-discord_blue"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
