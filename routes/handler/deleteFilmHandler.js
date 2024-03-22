const connection = require("../config/config.js");

function deleteFilmHandler(req, res) {
  const id = req.params.id;

  const checkFilmQuery = `SELECT * FROM film WHERE id = ?`;

  connection.query(checkFilmQuery, [id], function (error, result) {
    if (error) {
      res.status(500).send(error.message);
    } else {
      if (result.length === 0) {
        // Jika tidak ada data dengan id yang dimaksud
        res.status(404).json({ message: "Data not found" });
      } else {
        const deleteFilmQuery = `DELETE FROM film WHERE id = ?`;

        connection.query(deleteFilmQuery, [id], function (error, result) {
          if (error) {
            res.status(500).send(error.message);
          } else {
            res.json({ message: "Delete Success", data: result });
          }
        });
      }
    }
  });
}

module.exports = deleteFilmHandler;
