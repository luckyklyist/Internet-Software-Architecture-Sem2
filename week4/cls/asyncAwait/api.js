const express = require("express");

const app = express();
const PORT = 3000;

const nameHaru = [
  {
    name: "hari",
  },
  {
    name: "ram",
  },
  {
    name: "barun",
  },
  {
    name: "gita",
  },
];

app.get("/api", (_, res) => {
  res.send(nameHaru);
});

app.listen(PORT, () => console.log(`server running at the port ${3000}`));
