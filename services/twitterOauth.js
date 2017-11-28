const Twitter = require("twitter");
const keys = require("../config/keys");

module.exports = function(res, hashtag) {
  const client = new Twitter({
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret
  });

  const endpoint =
    "search/tweets.json?q=%23" + hashtag + "&result_type=mixed&count=14";

  client.get(endpoint, function(error, tweets, response) {
    if (error) console.log("Error => ", error);

    let dataFetched = {
      hashtag: hashtag,
      tweets: []
    };
    let tweet;

    tweets.statuses.map(function(status, i) {
      tweet = new Object();
      tweet.user = new Object();

      tweet.text = status.text;
      tweet.user.name = status.user.name;
      tweet.user.screen_name = status.user.screen_name;
      tweet.user.avatar = status.user.profile_image_url;

      dataFetched.tweets.push(tweet);
    });

    res.send(dataFetched);
  });
};
