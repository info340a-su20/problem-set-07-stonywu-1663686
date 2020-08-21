'use strict';

import readline from "readline-sync";
import * as model from "./model";
import { printTweets } from "./view";

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool")
    let recent = model.getRecentTweets();
    printTweets(recent);
    let response = readline.question("Search tweets, or EXIT to quit: ");
    if (response === "EXIT") {
        return;
    }
    let results = model.searchTweets(response);
    printTweets(results);
}