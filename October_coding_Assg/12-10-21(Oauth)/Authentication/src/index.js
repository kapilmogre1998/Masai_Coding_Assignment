const express = require('express');

const passport = require("./config/passport")

const app = express();

app.use(express.json());
app.use(passport.initialize());

const {register, login} = require("./controller/auth.controller")
const productController = require("./controller/product.controller")


passport.serializeUser(function({user, token}, done) {
    done(null, {user, token});
});
  
passport.deserializeUser(function({user, token}, done) {
    done(err, {user, token});
});

app.get("/auth/google/failure", function(req, res) {
    return res.send("Something went wrong");
})

app.get('/auth/google',passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}), function(req, res) {
    const {user, token} = req.user
    console.log(res)
    return res.status(200).send({user, token });
});

app.post("/register", register);
app.post("/login", login);
app.use("/products", productController);

module.exports = app;