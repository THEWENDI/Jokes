const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, "Setup required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline required"],
        minlength: [3, "punchline must be at least 3 characters long"]        
    }
}, {timestamps : true})


// OPTION 1
// const Pet = mongoose.model('Pet', PetSchema)
// module.exports = Pet

// OPTION 2
module.exports.Joke = mongoose.model('Joke', JokeSchema)