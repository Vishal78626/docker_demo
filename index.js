const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "pad",
      age: 10,
    },
    {
      id: 15,
      name: "test2",
      age: 30,
    },
    {
      id: 11,
      name: "test1",
      age: 25,
    },
    {
      id: 12,
      name: "testing",
      age: 15,
    },
  ]);
});

app.listen(5000, () => {
  console.log("Run");
});
