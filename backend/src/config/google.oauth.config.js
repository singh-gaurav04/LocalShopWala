// require('dotenv').config()

const passport = require("passport");
const userModels = require("../models/user.models");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      //cb means callback
      try {
        let user = await userModels.findOne({ email: profile.emails[0].value });
        if (!user) {
         user = new userModels({
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }
        cb(null, user);
      } catch (error) {
        cb(error, false);
      }
    }
  )
);

//data will save in session
passport.serializeUser(function (user, cb) {
  return cb(null, user._id);
});

//we can watch that data

passport.deserializeUser(async function (id, cb) {
  let user = await userModels.findOne({ _id: id });
  cb(null, user);
});

module.exports = passport;
