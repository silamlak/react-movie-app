import React from 'react'
const Banner = ({data}) => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  return (
    <div style={divStyle} className='h-screen max-sm:flex-col flex justify-center items-center gap-2 sm:gap-4 px-5'>
      <div className='z-10'>
        <h1 className='text-white text-5xl font-bold pb-5 max-sm:pb-3'>{data.title}</h1>
        <p className='max-w-xl text-white font-semibold text-[18px]'>{data.overview}</p>
        <div className='flex gap-4 mt-3 sm:mt-5 justify-start'>
          <button className='px-4 py-[2px] bg-blue-700 transition-colors duration-300 rounded-sm text-white font-bold hover:bg-white hover:text-blue-600'>Watch Now</button>
          <button className='px-4 py-[2px] bg-transparent transition-colors duration-300 border-2 rounded-sm text-white font-bold hover:bg-blue-700'>Watch Trailer</button>
        </div>
      </div>
      <div className='max-sm:hidden'>
        <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        className='max-w-[250px] h-[300px] sm:h-[400px] rounded-xl'
        />
      </div>
    </div>
  )
}

export default Banner