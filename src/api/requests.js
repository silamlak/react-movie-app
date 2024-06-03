import { fetchFun, tmdbOptions, ytoptions } from "./fetch";

  export const querys = async(q,page) => {
    const response = await fetchFun(
                `https://api.themoviedb.org/3/search/multi?query=${q}&include_adult=true&language=en-US&page=${page}`,
                tmdbOptions
              );
              return response
  }


  export const populars_tv = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        tmdbOptions
      );
      return pop_tvPage;
  }

  export const populars_movie = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        tmdbOptions
      );
      return pop_tvPage;
  }


  export const tv_trends = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=${page}`,
        tmdbOptions
      );
      return pop_tvPage;
  }

  export const movie_trends = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`,
        tmdbOptions
      );
      return pop_tvPage;
  }


  export const movie = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        tmdbOptions
      );
      return pop_tvPage;
  }

  export const tv = async(page) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        tmdbOptions
      );
      return pop_tvPage;
  }


  export const movie_detail = async(types,id) => {
    const pop_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/${types}/${id}?language=en-US`,
        tmdbOptions
      );
      return pop_tvPage;
  }


  export const movie_video = async(types,id) => {
    const movie_tvPage = await fetchFun(
        `https://api.themoviedb.org/3/${types}/${id}/videos?language=en-US`,
        tmdbOptions
      );
      return movie_tvPage;
  }


  export const movie_cast = async(types,id) => {
    const movie_cast = await fetchFun(
        `https://api.themoviedb.org/3/${types}/${id}/credits?language=en-US`,
        tmdbOptions
      );
      return movie_cast;
  }

  export const movie_ytVideo = async (videoId) => {
    const movie_yt = await fetchFun(
        `https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`,
        ytoptions
      );
      return movie_yt;
  }


  export const similar_videos = async (type, id) => {
    const movie_yt = await fetchFun(
        `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1}`,
        tmdbOptions
      );
      return movie_yt;
  }

  export const movies = async (type, page) => {
    const movie_yt = await fetchFun(
        `https://api.themoviedb.org/3/discover/${type}?include_adult=true&include_video=false&language=en-US&page=8&sort_by=popularity.desc}`,
        tmdbOptions
      );
      return movie_yt;
  }



  export const fetchVideos = async (videoId) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBJ7HZNtilecrqo41-hENG37WfMhZRWN1c&part=snippet,contentDetails,statistics,status`)
    const data = await response.json();
    return data
}

  export const fetchVideoss = async (videoId) => {
    const kkkkkk = await fetch(`/movies?tmdb_id=${videoId}&language=de&categories=Trailer,-Clip`);
    const data = await kkkkkk.json();
    return data.trailer
}

  export const fetch_youtube_videos= async (videoId) => {
    const kkkkkk = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBJ7HZNtilecrqo41-hENG37WfMhZRWN1c&q=${videoId} movie trailer&type=video&maxResults=5`)
    const data = await kkkkkk.json();
    return data.items
}


