const axios = require("axios");
module.exports = {
  getAll: async (req, res) => {
    const page = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
        // "https://api.themoviedb.org/3/trending/movie/week?api_key=3554211ccddedad28b58fe56cd457b08"
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getMovies: async (req, res) => {
    const genreId = req.params.genreId;
    const page = req.params.page;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreId}`
      )
      .then((response) => {
        res.status(200).json({ data: response.data.results });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getMoviesVideo: async (req, res) => {
    try {
      const movieId = req.params.id;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
        )
        .then((response) => {
          res.status(200).json({ data: response.data });
        });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  getOneMovie: async (req, res) => {
    const movieId = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  getTvSeries: async (req, res) => {
    const movieId = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&sort_by=popularity.desc&page=${movieId}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(422).json({ message: err.message });
      });
  },

  getOneTvSeries: async (req, res) => {
    const TvId = req.params.id;
    axios
      .get(
        `
    https://api.themoviedb.org/3/tv/${TvId}?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(422).json({ message: err.message });
      });
  },

  getTvSeriesVideo: async (req, res) => {
    const tvId = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((err) => {
        res.status(422).json({ message: err.message });
      });
  },

  getCasting: async (req, res) => {
    const movieId = req.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US`
      )
      .then((response) => {
        res.status(200).json({ data: response.data });
      })
      .catch((error) => {
        res.status(422).json({ message: error.message });
      });
  },

  getTvSeriesCasting: async (req, res) => {
    try {
      const TvId = req.params.id;
      axios
        .get(
          `
      https://api.themoviedb.org/3/tv/${TvId}/credits?api_key=cf1e9268a40ecb14132ec37b647fc372&language=en-US`
        )
        .then((response) => {
          res.status(200).json({ data: response.data });
        });
    } catch (err) {
      res.status(422).json({ message: err.messages });
    }
  },

  getBySearch: async (req, res) => {
    try {
      const query = req.params.query;
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&query=${query}&page=1&include_adult=false`
        )
        .then((response) => {
          res.status(200).json({ data: response.data.results });
        });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },
};
