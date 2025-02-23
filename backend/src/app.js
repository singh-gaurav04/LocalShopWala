const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const expressSession = require('express-session')
const cors = require("cors")

require("dotenv").config();
require("./config/google.oauth.config");

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SESSION_SECRET,
}))

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use("/auth", authRouter);

module.exports = app;
