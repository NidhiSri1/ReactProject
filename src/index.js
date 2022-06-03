const express = require("express");
const app = express();

const connect = require("./config/db");
const { register, login } = require("./controllers/authControllers");
app.use(express.json());

app.post("/", register);
app.post("/login", login);

app.listen(2345, async () => {
    try {
        await connect();
    } catch (err) {
        console.log(err.message);
    }
    console.log("Connected to 2345...");
});
