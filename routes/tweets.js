const twitter = require("../services/twitterOauth");

module.exports = app => {
  app.post("/fetch-tweets", (req, res) => {
    var hashtag = req.body.keyword;

    twitter(res, hashtag);
  });
};
