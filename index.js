require("dotenv").config();
const server = require("./config/server");
require("./config/database");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
