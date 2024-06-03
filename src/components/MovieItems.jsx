import { Link } from 'react-router-dom'
import { IoLogoYoutube } from "react-icons/io";
const MovieItems = ({item}) => {

  return (
    <Link to={`/${item ? item.media_type : 'tv'}/${item.id}`}>
      <div className="group relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          className="w-full h-[300px] object-cover rounded-xl"
          alt="Superman"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300">
          <button className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 text-4xl font-bold">
            <IoLogoYoutube className='text-[50px] text-blue-800' />
          </button>
        </div>
        <h2 className="relative z-10 text-[#f0f0f0] font-semibold group-hover:text-blue-700 transition-opacity duration-300">
          {item ? (item.title ? item.title : item.name) : null}
        </h2>
      </div>
    </Link>
  )
}

export default MovieItems