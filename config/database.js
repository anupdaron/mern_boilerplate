const mongoose = require("mongoose");

class Connection {
  constructor() {
    this.database();
  }

  database() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL);
  }
}

module.exports = new Connection();
