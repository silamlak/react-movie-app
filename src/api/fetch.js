export const tmdbOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDgwZjFlNTQ3NjNkZTBjMzVjNTFjYzQxYWM3YmJhOSIsInN1YiI6IjY1NDg5ODQyMjg2NmZhMDEzOGE3ZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MAWTt6HDzpM0Z5X94_pG0VmhDLAlxtJkLHxM-vVk6Ig', // Replace with your actual TMDb API key
    'Content-Type': 'application/json',
  },
};


  export const fetchFun = async (url, option) => {
    const response = await fetch(url, option)
    const data = await response.json();
    return data
  }

export  const ytoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6f969baba3msh2fc24df8edd5dfbp11a8f1jsnb8f560d6a690',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
