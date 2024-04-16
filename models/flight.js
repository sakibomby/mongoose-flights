const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA-TAC', 'SNA'],
    },
    arrival: {
        type: Date
    }
}, {
   timestamps:true 
});

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
    },

    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);