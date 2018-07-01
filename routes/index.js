var models = require("../models");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  models.sequelize
    .query(
      `SELECT
          name,
          birth_date,
          EXTRACT(DATE FROM fechas(birth_date)) AS fechas
      FROM
          "People"
      ORDER BY
          birth_date ASC`,
      {
        model: models.Person
      }
    )
    .then(function(people) {
      res.render("index", { title: "Celebrities, ordered by date", people: people });
    });
});

module.exports = router;
