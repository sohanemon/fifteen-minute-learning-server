const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const courses = require("./data/courses.json");
const faq = require("./data/faq.json");
const blogs = require("./data/blogs.json");
app.get("/", (req, res) => {
  res.send("15minutelearning server is running...");
});
app.get("/courses", (req, res) => {
  res.json(courses);
});
app.get("/courses/:id", (req, res) => {
  const course = courses.find((el) => el.id === req.params.id);
  res.send(course);
});
app.get("/faq", (req, res) => {
  res.send(faq);
});
app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.listen(5000);
