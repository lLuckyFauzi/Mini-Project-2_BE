const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./routes/user");
const Movies = require("./routes/movies");
const MyList = require("./routes/myList");
const Comment = require("./routes/comment");
const Reviewed = require("./routes/Reviewed");
const path = require("path");

app.use("/image", express.static(path.join(__dirname + "/image")));

app.use(express.json());
app.use(cors());

app.use(User);
app.use(Movies);
app.use(MyList);
app.use(Comment);
app.use(Reviewed);

app.listen(3001, () => console.log("Listening at port: " + 3001));
