import axios from "axios";

export default () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYyYTdjMWNlMzAyOTE5OGI5YjJiMWY0NDQ0MTk5ZiIsInN1YiI6IjVmZjBiYTUwNzRkNmMwMDAzZTcxYTYzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.55T9q-h-0OkTkikw_gaQn3JrzSC6NqMFHFAWrjPawqo";

  return axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {'Authorization': 'Bearer '+token,'Content-Type': 'application/json',},
    
  });
};
