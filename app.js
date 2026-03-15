const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");

const app = express();

const users = {
  admin: {
    username: "admin",
    password: "password123",
    fullName: "System Administrator",
    email: "admin@university.edu",
    bio: "Managing the campus network infrastructure.",
  },
  student_dev: {
    username: "student_dev",
    password: "dev_password",
    fullName: "Jane Developer",
    email: "jane.d@student.edu",
    bio: "Full-stack enthusiast and coffee drinker.",
  },
};

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("instantgram-dididi-dididi-dididididi"));
app.use(
  session({
    secret: "instantgram-dididi-dididi-dididididi",
    resave: false,
    saveUninitialized: false,
  }),
);

// Auth middleware, checks if the user is logged in
const requireLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

// GET /login
app.get("/login", (req, res) => {
  res.render("login");
});

// POST /login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    req.session.user = user;
    res.redirect("/profile");
  } else {
    res.redirect("/login?error=Invalid username or password");
  }
});
