const { User, MyList, Reviewed } = require("../helper/relation");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRound = 10;

module.exports = {
  signUp: async (req, res) => {
    const password = req.body.password;
    const hashPassword = await hash(password, saltRound);
    try {
      const data = await User.create({
        email: req.body.email,
        fullName: req.body.fullName,
        password: hashPassword,
        image: req.body.image,
      });
      res.json(data);
    } catch (Error) {
      console.log(Error);
      res.status(422).json({ message: Error.sqlMessage });
    }
  },

  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        throw Error("Akun tidak ditemukan");
      }
      const isVeryvied = await compare(password, data.password);
      console.log(isVeryvied);
      if (!isVeryvied) {
        throw Error("Password salah");
      }

      const payload = {
        id: data.id,
        fullName: data.fullName,
      };
      const token = jwt.sign(payload, "token");
      res.json({
        message: "Berhasil masuk",
        fullName: data.fullName,
        token: token,
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  },

  update: async function (req, res) {
    try {
      const id = req.params.id;
      const password = req.body.password;
      const hashPassword = await hash(password, saltRound);
      console.log(hashPassword);
      const data = await User.update(
        {
          email: req.body.email,
          fullName: req.body.fullName,
          password: hashPassword,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ message: "Data berhasil di update" });
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getOneUser: async (req, res) => {
    const data = await User.findOne({
      where: { id: req.params.id },
      include: [{ model: MyList }, { model: Reviewed }],
    });
    res.status(202).json({ message: "berhasil", data: data });
  },

  upload: async (req, res) => {
    try {
      const data = await User.update(
        {
          image: req.file.filename,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ message: "Succes" });
    } catch (error) {
      res.status(422).json({ message: error.message });
    }
  },

  getAllUser: async (req, res) => {
    const data = await User.findAll({});
    res.status(200).json({ data });
  },
};
