export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIES_API_KEY,
  headers: {
    accept: "application/json",
    authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIES_API_KEY}`,
  },
};

export const fetchMovies = async (query = "") => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by-popularity.desc`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      // @ts-ignore
      throw new Error("Failed to fetch the movies: ", response.statusText);
    }

    const movies = await response.json();

    return movies.results;
  } catch (error) {
    console.log("error fetching the movies: ", error);
  }
};
