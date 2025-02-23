const connectDB = require("./config/mongoose.connection.js");
const app = require("./app.js");

require("dotenv").config();

connectDB()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`app is listening at the port ${port}`);
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
