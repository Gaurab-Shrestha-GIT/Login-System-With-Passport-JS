const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth20").Strategy;
var GithubStrategy = require("passport-github2").Strategy;

const GOOGLE_CLIENT_ID =
  "893424690415-inul33qulmd4e9t72592e221ci0ivf93.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "ff5549c6e1b72b1f62b1";
const GITHUB_CLIENT_SECRET = "6f406d619dacc7fe2eaccfa19d42923de5ec64c4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
