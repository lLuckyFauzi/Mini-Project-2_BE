const express = require("express");
const router = express.Router();
const controllerMovies = require("../controller/movies");

//Router Movies
router.get("/get_allMovies/:id", controllerMovies.getAll);
router.get("/get_movies/:genreId/:page", controllerMovies.getMovies);
router.get("/getMoviesVideo/:id", controllerMovies.getMoviesVideo);
router.get("/get_one_movie/:id", controllerMovies.getOneMovie);
router.get("/get_casting/:id", controllerMovies.getCasting);
router.get("/getBySearch/:query", controllerMovies.getBySearch);

//Router Tv Series
router.get("/get_TvSeries/:id", controllerMovies.getTvSeries);
router.get("/getOne_TvSeries/:id", controllerMovies.getOneTvSeries);
router.get("/getTvSeriesVideo/:id", controllerMovies.getTvSeriesVideo);
router.get("/getTvSeriesCasting/:id", controllerMovies.getTvSeriesCasting);

module.exports = router;
