const connection = require("../config/config.js");

function getEachFilmHandler(req, res) {
  const id = req.params.id;

  const checkFilmQuery = `SELECT * FROM film WHERE id = ?`;

  connection.query(checkFilmQuery, [id], function (error, result) {
    if (error) {
      res.status(500).send(error.message);
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "Data not found" });
      } else {
        const getEachFilmQuery = `SELECT * FROM film WHERE id = ?`;

        connection.query(getEachFilmQuery, [id], function (error, result) {
          if (error) {
            res.status(500).send(error.message);
          } else {
            res.json({ message: "Success", data: result });
          }
        });
      }
    }
  });
}

module.exports = getEachFilmHandler;
