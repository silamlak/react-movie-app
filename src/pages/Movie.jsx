import React,{useEffect, useState} from 'react'
import MovieItems from '../components/MovieItems'
import { useLocation, useParams } from "react-router-dom";
import { movie, movie_trends, movie_tv, movies, populars, populars_movie, populars_tv, querys, trends, tv, tv_trends } from '../api/requests';
import * as Loader from 'react-loader-spinner';

const Movie = ({type}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const pathname = url.pathname;
  const pathSegments = pathname.split('/');
  const movieSegment = pathSegments[1];

  console.log(type)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)
  const [pageLoaded, setPageLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(query){
          const response = await querys(query, page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (type.includes('movie/popular')) {
          const response = await populars_movie(page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (type.includes('trending/movie')) {
          const response = await movie_trends(page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (type.includes('tv/popular')) {
          const response = await populars_tv(type, page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (type.includes('trending/tv')) {
          const response = await tv_trends(type, page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (movieSegment === 'tv') {
          const response = await tv(page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else if (movieSegment === 'movie') {
          const response = await movie(page)
          setData(oldData =>  [...data, ...response.results]);
          setLoading(false);
          setPageLoad(false)
        }else{
          console.log('error')
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
   
  }, [query, page,type]);

  const loadmore = () => {
    setPage(oldPage => oldPage + 1);
    setPageLoad(true);
  }

  const loaderStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  return (
    loading ?

    <div style={loaderStyle}>
      <Loader.FidgetSpinner type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
    </div>

  :
    <div className='max-w-[1440px] w-full mx-auto px-6'>
      <h1 className='text-center text-slate-400 font-sans font-semibold text-4xl py-16'>Movies</h1>
      <div className='grid max-xs:grid-cols-1 xsll:grid-cols-2 max-sm:grid-cols-2 sll:grid-cols-3 mll:grid-cols-4  xl:grid-cols-6 xll:grid-cols-5 gap-3'>
        {data?.map((item, i) => (
          <MovieItems key={i} item = {item} />
        ))}
      </div>
      <button onClick={loadmore} disabled={pageLoaded} className='text-white bg-blue-700 py-1 px-2 my-8 rounded-md'>  {pageLoaded ? 'Loading...' : 'Load More'}</button>
    </div>
  )
}

export default Movie