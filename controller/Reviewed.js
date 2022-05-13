const { Reviewed } = require("../helper/relation");

module.exports = {
  createReview: async (req, res) => {
    try {
      const data = await Reviewed.create({
        userId: req.body.userId,
        movieId: req.body.movieId,
        title: req.body.title,
        image: req.body.image,
        year: req.body.year,
        duration: req.body.duration,
        genre: req.body.genre,
        casting: req.body.casting,
        description: req.body.description,
        rating: req.body.rating,
        isReviewed: req.body.isReviewed,
      });
      res.status(200).json({ data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  getReview: async (req, res) => {
    try {
      const data = await Reviewed.findAll({});
      res.status(200).json({ data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  getOneReview: async (req, res) => {
    try {
      const data = await Reviewed.findOne({
        where: {
          movieId: req.params.movieId,
          userId: req.params.userId,
        },
      });
      res.status(200).json({ data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },
};
