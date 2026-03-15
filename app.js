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
