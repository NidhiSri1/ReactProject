const express = require("express");
const app = express();

const connect = require("./config/db");

app.listen(3100, async (res, rej) => {
    try {
        console.log("Connected to 3100...");
        connect();
    } catch (err) {
        console.log(err);
    }
});
