require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {v4: uuidV4} = require('uuid');

const User = require("../model/user.model");

const {newToken} = require("../controller/auth.controller")


passport.use(new GoogleStrategy({
    clientID:     "469098003616-0oubdsnin85p7pdaii3c6rg0jm9khn2f.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },

  async function(request, accessToken, refreshToken, profile, done) {
    const email = profile?._json?.email
    
    try { 
     let user = await User.findOne({email}).lean().exec();

      if(!user) {
          user = await User.create({
          email: email,
          password: uuidV4()
        })
      }

      //error - null
      const token = newToken(user);
      return done(null, {user, token})

    } catch(err) {
      console.log("err", err)
    }
  }
));

module.exports = passport