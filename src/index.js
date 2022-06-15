const express = require("express");
const app = express();

const connect = require("./config/db");
const { register, login } = require("./controllers/authControllers");
const candiateControllers = require("../src/controllers/candiateList");
const { body } = require("express-validator");
app.use(express.json());

app.post(
    "/",
    body("mobileNum").isLength({ min: 10 }),
    body("password").isStrongPassword(),
    // body("Email").isEmail,
    register
);

app.post("/login", login);
app.use("/candiate", candiateControllers);

app.listen(2345, async () => {
    try {
        await connect();
    } catch (err) {
        console.log(err.message);
    }
    console.log("Connected to 2345...");
});
