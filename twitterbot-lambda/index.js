const request = require('request');
const rp = require('request-promise');
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];
var exec = require('child_process').execFile;

const postStatus = async () => {
    return new Promise(async (resolve, reject) => {
        return exec('./randomNameGenerator', function(err, data) {
            const res = JSON.parse(data);
            console.log(res)
            return client.post('statuses/update', {status: res},  function(error, tweet, response) {
                if (error){
                    return reject(error);    
                };
            
                return resolve(res);
            });
        });
    });
}

exports.handler = async (event) => {
    let tweeter = await postStatus();
    return tweeter;
};

