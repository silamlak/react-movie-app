import React from 'react'
import MovieBox from './MovieBox'
import { Link } from 'react-router-dom'

const SimilarMovie = ({similar}) => {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const pathname = url.pathname;
  const pathSegments = pathname.split('/');
  const movieSegment = pathSegments[1];


    if (!similar) {
        return <div>Loading...</div>;
      }
  return (
    <div className='flex flex-col max-w-[1440px] w-full gap-3 mt-16'>
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-white'>Similar Movies</h1>
      <Link to='/movie/trend'>
      <button
      className='px-5 py-[2px] hover:text-blue-700 hover:border-blue-700 rounded-sm bg-transparent border-2 text-white font-semibold text-[18px]'>More</button>
      </Link>
    </div>
    <div className='flex gap-2 text-white overflow-y-auto sc px-2' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      {similar.map((item,i) => (
        <MovieBox key={i} item ={item} movieSegment = {movieSegment}/>
      ))}
    </div>
  </div>
  )
}

export default SimilarMovie