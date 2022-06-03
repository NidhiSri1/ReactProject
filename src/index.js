const express = require("express");
const app = express();

const connect = require("./config/db");

app.listen(2345, async () => {
    try {
        await connect();
    } catch (err) {
        console.log(err.message);
    }
    console.log("Connected to 3100...");
});
