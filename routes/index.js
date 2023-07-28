var express = require('express');
var router = express.Router();
var passport = require('passport');
var router = express.Router();
var users = require('./users.js');
var GoogleStrategy = require('passport-google-oidc');
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env['GOOGLE_CLIENT_ID'],
  clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
  callbackURL: '/oauth2/redirect/google',
  scope: [ 'email','profile' ]
}, async function verify(issuer, profile, cb) {
  console.log(profile);
  let existingUser = await users.findOne({email:profile.emails[0].value});
  if(existingUser){
    return cb(null,existingUser);
  }else{
    let newUser = await users.create({name:profile.displayName,email:profile.emails[0].value});
    return cb(null,newUser)
  }
}));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});





router.get('/login/federated/google', passport.authenticate('google',));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: '/index',
  failureRedirect: '/login'
}));




module.exports = router;
