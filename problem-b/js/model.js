'use strict';

import allTweets from "./uw_ischool_tweets";

const tweetData = allTweets.map((tweetObj) => {
    let mappedObj = {
        text: tweetObj.text,
        timestamp: Date.parse(tweetObj.created_at)
    }
    return mappedObj;
});

export function getRecentTweets() {
    tweetData.sort( (tweet1, tweet2) => {
        return (tweet2.timestamp - tweet1.timestamp);
    })
    return tweetData.slice(0, 5);
}

export function searchTweets(searchString) {
    let results = tweetData.filter((tweet) => {
        return (tweet.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
    });
    return results;
}