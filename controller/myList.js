const { MyList } = require("../helper/relation");

module.exports = {
  addMyList: async (req, res) => {
    try {
      const data = await MyList.create({
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
        isMylist: req.body.isMylist,
      });
      res.status(200).json({ data: data });
    } catch (err) {
      res.status(422).json({ message: err.sqlMessage });
    }
  },

  getAllList: async (req, res) => {
    try {
      const data = await MyList.findAll({});
      res.status(200).json({ data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  getOneMyList: async (req, res) => {
    try {
      const data = await MyList.findOne({
        where: {
          userId: req.params.userId,
          movieId: req.params.movieId,
        },
      });
      res.status(200).json({ data: data });
    } catch (err) {
      res.status(422).json({ message: err.sqlMessage });
    }
  },

  removeFromList: async (req, res) => {
    try {
      const data = await MyList.destroy({
        where: {
          userId: req.params.userId,
          movieId: req.params.movieId,
        },
      });
      res.status(200).json({ message: "Succes" });
    } catch (err) {
      res.status(422).json({ message: err.sqlMessage });
    }
  },
};
