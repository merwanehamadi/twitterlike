const express = require('express');
const os = require('os');
const Twitter = require('twitter');
const keys = require('../../keys');

const client = new Twitter({
  consumer_key: keys.CONSUMER_KEY,
  consumer_secret: keys.CONSUMER_SECRET,
  access_token_key: keys.ACCESS_TOKEN_KEY,
  access_token_secret: keys.ACCESS_TOKEN_SECRET
});

const defaults = {
  screen_name: 'realDonaldTrump',
  tweet_mode: 'extended',
  count: 20,
};

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.route('/:handle')
  .get(function(req, res) {
    const params = {
      ...defaults,
      max_id: req.query.max_id,
      screen_name: req.params.handle,
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets);
      } else {
        console.error(error)
      }
    });
  });
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
