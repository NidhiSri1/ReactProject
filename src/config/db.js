const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://sri:sri_123@cluster0.r9qke.mongodb.net/cloneAuth?retryWrites=true&w=majority"
    );
};
