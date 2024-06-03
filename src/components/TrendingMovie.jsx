import MovieBox from './MovieBox'
import { Link } from 'react-router-dom'

const TrendingMovie = ({allData}) => {

  if (!allData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="flex flex-col max-w-[1440px] w-full gap-3 mt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Trending Movies</h1>
        <Link to="/movie/trend">
          <button className="px-4 py-[2px] rounded-sm bg-transparent hover:text-blue-700 hover:border-blue-700 border-2 text-white font-semibold text-[15px]">
            View More
          </button>
        </Link>
      </div>
      <div className="flex gap-2 text-white overflow-y-auto sc px-2">
        {allData.map((item, i) => (
          <MovieBox key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TrendingMovie