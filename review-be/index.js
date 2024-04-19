require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/movies", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
