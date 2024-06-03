import Banner from '../components/Banner';
import TrendingMovie from '../components/TrendingMovie';
import PopularMovie from '../components/PopularMovie';
import TrendingTv from '../components/TrendingTv';
import PopularTv from '../components/PopularTv';
import { fetchFun, tmdbOptions } from '../api/fetch';
import { useEffect, useState } from 'react';
import * as Loader from 'react-loader-spinner';


const Home = () => {
  const [data, setData] = useState([]);
  const [trendTv, setTrendTv] = useState([]);
  const [PopularsTv, setPopularsTv] = useState([]);
  const [PopularsMovie, setPopularsMovie] = useState([]);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {


      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      console.log(connection)
let type = connection.effectiveType;

function updateConnectionStatus() {
  type = connection.effectiveType;
  console.log(type)
}

connection.addEventListener('change', updateConnectionStatus);

      try {
        const response = await fetchFun(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1",
          tmdbOptions
        );
        setData(response.results);

        const pop_movie = await fetchFun(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          tmdbOptions
        );
        setPopularsMovie(pop_movie.results);

        const trend_series = await fetchFun(
          "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
          tmdbOptions
        );
        setTrendTv(trend_series.results);
        // console.log(trend_series)
        const pop_series = await fetchFun(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          tmdbOptions
        );
        setPopularsTv(pop_series.results);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    const loaderStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }

  const random = Math.floor(Math.random() * data.length);

  return (
    loading ?

    <div style={loaderStyle}>
      <Loader.FidgetSpinner type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
    </div>

  :
    <div className="">
      <Banner data={data[random]} />
      <div className="wd">
        <TrendingMovie allData={data} loading = {loading} error={error} />
        <PopularMovie PopularsMovie={PopularsMovie} />
        <TrendingTv trendTv = {trendTv}/>
        <PopularTv PopularsTv={PopularsTv} />
      </div>
    </div>
  );
};
export default Home;
