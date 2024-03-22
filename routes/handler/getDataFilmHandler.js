const connection = require("../config/config.js");

function getDataFilmHandler(req, res) {
  const getFilmQuery = `SELECT * FROM film `;
  connection.query(getFilmQuery, [], function (error, result) {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.json({ message: "Get data film Success", data: result });
    }
  });
}

module.exports = getDataFilmHandler;
