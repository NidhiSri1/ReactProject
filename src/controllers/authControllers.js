const User = require("../modules/UserModel");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET);
};
const register = async (req, res) => {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user) {
        res.send("User already Exist");
    }

    user = await User.create(req.body);

    const token = newToken(user);

    res.send({ user, token });
};

const login = async (req, res) => {
    let user = await User.findOne({ email }).lean().exec();

    if (!user) {
        res.send("Invalid details");
    }
    
};

module.exports = { register, login };
