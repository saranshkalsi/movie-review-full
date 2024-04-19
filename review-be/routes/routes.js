const express = require("express");
const axios = require("axios");
const iso6391 = require("iso-639-1");

const router = express.Router();
const API_KEY = process.env.TMDB_API_KEY;

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      movieTitle: movie.original_title,
      imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      originalLanguage: iso6391.getName(movie.original_language),
      overview: movie.overview,
    }));
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/search", async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      movieTitle: movie.original_title,
      imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      originalLanguage: iso6391.getName(movie.original_language),
      overview: movie.overview,
    }));

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    const movie = {
      movieTitle: response.data.original_title,
      imageUrl: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`,
      rating: response.data.vote_average,
      releaseDate: response.data.release_date,
      originalLanguage: iso6391.getName(response.data.original_language),
      overview: response.data.overview,
      popularity: response.data.popularity ? response.data.popularity : "N.A",
      budget: response.data.budget ? response.data.budget : "N.A",
      revenue: response.data.revenue ? response.data.revenue : "N.A",
    };

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
