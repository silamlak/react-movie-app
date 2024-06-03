import React from 'react'
import MovieBox from './MovieBox'
import { Link } from 'react-router-dom'

const TrendingTv = ({trendTv}) => {
  return (
    <div className="flex flex-col max-w-[1440px] w-full gap-3 mt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Trending Tv-Series</h1>
        <Link to="/tv/trend">
          <button className="px-4 py-[2px] rounded-sm bg-transparent border-2 text-white font-semibold text-[15px] hover:text-blue-700 hover:border-blue-700">
            View More
          </button>
        </Link>
      </div>
      <div className="flex gap-2 text-white overflow-y-auto sc px-2">
        {trendTv.map((item, i) => (
          <MovieBox key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TrendingTv