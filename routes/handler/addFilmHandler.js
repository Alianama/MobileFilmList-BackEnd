const connection = require("../config/config.js");

function addFilmHandler(req, res) {
  const { judul, tahun_rilis, bahasa, rating, minimal_usia, cover_img } =
    req.body;

  const addFilmQuery = `INSERT INTO film (judul, tahun_rilis, bahasa, rating, minimal_usia, cover_img) VALUES (?,?,?,?,?,?)`;
  connection.query(
    addFilmQuery,
    [judul, tahun_rilis, bahasa, rating, minimal_usia, cover_img],
    function (error, result) {
      if (error) {
        res.status(500).send(error.message);
      } else {
        res.json({ message: "Film add Success", data: result });
      }
    }
  );
}

module.exports = addFilmHandler;
