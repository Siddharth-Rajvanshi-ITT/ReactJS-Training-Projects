const express = require("express");
const users = require("./userData");
const cors = require("cors");
const app = express();
const port = 8484;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/users", (req, res) => {
  return res.status(200).send({
    status: "success",
    data: users,
  });
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
