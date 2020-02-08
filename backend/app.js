const express = require("express");
const app = express();
const axios = require("axios");
app.get("/", (req, res) => {
  let k = 0;
  axios
    .get("https://api.football-data.org/v2/teams/73/matches?status=SCHEDULED", {
      headers: {
        "X-Auth-Token": "550ea9f6e33a410b9c489a5f85a67fda"
      }
    })
    .then(e => {
      console.log(e.data.matches);
      k = e.data.matches;
      res
        .status(200)
        .send({ a: k })
        .end();
    });
});
app.listen(3030);
