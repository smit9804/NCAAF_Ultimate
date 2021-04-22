const mongoose = require('mongoose');

const FootballSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Team name is required"]
    },

    town: {
        type: String
    },
    stadium: {
        type: String
    },

    mascot: {
        type: String
    },

    picked_wins: {
        type: Number,
    },

    picked_losses: {
        type: Number
    },

    color1: {
        type: String
    },

    color2: {
        type: String
    },

    conference: {
        type: String
    }
});

module.exports = mongoose.model("Football", FootballSchema);