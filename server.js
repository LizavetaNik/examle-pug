const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Указываем папку для статических файлов
app.use(express.static(path.join(__dirname, "public")));

// Устанавливаем Pug как шаблонизатор
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Маршрут для главной страницы
app.get("/", (req, res) => {
  res.render("index");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
