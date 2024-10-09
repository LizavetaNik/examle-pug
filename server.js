const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/views/page/:sectionName", (req, res) => {
  const sectionName =
    req.params.sectionName.charAt(0).toUpperCase() +
    req.params.sectionName.slice(1);
  res.render(`page/${sectionName}`);
});

app.locals.basedir = path.join(__dirname, "views");

app.get("/customers", (req, res) => {
  fs.readFile("public/data/customers.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading data");
    }

    try {
      const customers = JSON.parse(data);
      res.render("customers", { customers });
    } catch (e) {
      console.error("Error parsing JSON:", e);
      res.status(500).send("Error parsing data");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
