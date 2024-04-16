const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Alaska', 'Jetblue'],
        required: true
    },
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA-TAC', 'SNA'],
        default: 'SNA'
    },
    flightNo: {
        type: Number,
        minlength: 2,
        maxlength: 4,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const today = new Date();
            const year = today.getFullYear();
            return today.setFullYear(year + 1);
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);