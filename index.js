const express = require("express");
const apiRoutes = require("./routes");
const { ServerConfig } = require("./config");
const { DBConfig } = require("./config");
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

DBConfig.connectDB();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
