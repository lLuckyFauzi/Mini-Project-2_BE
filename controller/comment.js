const { Comment } = require("../helper/relation");

module.exports = {
  createComment: async (req, res) => {
    try {
      const data = await Comment.create({
        userId: req.body.userId,
        movieId: req.body.movieId,
        userName: req.body.userName,
        profile: req.body.profile,
        history: req.body.history,
        rate: req.body.rate,
        title: req.body.title,
        text: req.body.text,
      });
      res.status(200).json({ data: data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },

  getAllComment: async (req, res) => {
    try {
      const data = await Comment.findAll({});
      res.status(200).json({ data });
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
  },
};
