const User = require("../modules/UserModel");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET);
};
const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user) {
            res.send("User already Exist");
        } else {
            user = await User.create(req.body);

            const token = newToken(user);

            res.send({ user, token });
        }
    } catch (err) {
        res.send(err);
    }
};

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.send("Invalid details");
        } else {
            const match = user.checkPassword(req.body.password);

            if (!match) {
                return res.send("Invalid crediantials");
            } else {
                const token = newToken(user);

                // res.send({ user, token });
                res.send({ user, token });
            }
        }
    } catch (err) {
        res.send(err.message);
    }
};

module.exports = { register, login };
