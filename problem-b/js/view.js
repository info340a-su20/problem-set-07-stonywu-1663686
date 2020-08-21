'use strict';
//import { getRecentTweets } from "./model"

export function printTweets(tweetArray) {
    if (tweetArray.length == 0) {
        console.log("No tweets found");
    }
    for (let each of tweetArray) {
        let time = new Date(each.timestamp);
        console.log("- \"" + each.text + "\" (" + time.toLocaleString("en-US") + ")");
    }
}