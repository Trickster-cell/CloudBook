const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "inotebook";

const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const mongoAltas =
  "mongodb+srv://yashraj:YwME7FYiD3arJsRn@inotebookcluster.xfndemb.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = async () => {
  //   mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(`mongodb://${server}/${database}`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

module.exports = connectToMongo;
