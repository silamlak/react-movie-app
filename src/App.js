import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import MovieDetail from "./pages/MovieDetail";
const App = () => {
  return (
    <div className="bg-black">
        <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>


        <Route path="/movie" element={<Movie type = 'movie'/>}/>
        <Route path="/tv" element={<Movie type= 'tv' />}/>

        

        <Route path="/movie/popular" element={<Movie type = 'movie/popular'/>}/>
        <Route path="/movie/trend" element={<Movie type = 'trending/movie'/>}/>
        <Route path="/tv/popular" element={<Movie type = 'tv/popular'/>}/>
        <Route path="/tv/trend" element={<Movie type = 'trending/tv'/>}/>


        <Route path='/tv/:id' element={<MovieDetail type = 'tvid' />}/>
        <Route path='/movie/:id' element={<MovieDetail type = 'movieid' />}/>

      </Routes>
    </div>
  );
}

export default  App;
