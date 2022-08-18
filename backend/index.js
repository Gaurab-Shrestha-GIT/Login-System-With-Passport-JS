const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const authRoute = require("./route/auth");
require("./passport");
const cors = require("cors");
const app = express();
const session = require("express-session");

app.use(
  cookieSession({
    name: "session",
    keys: ["gaurab"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    method: "GET,POST,PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server running in port 5000");
});
