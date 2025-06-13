const mongoose = require('mongoose');

const events = new mongoose.Schema({
    name:{
        type:String,
        required:true

    }, date:{
        type:date

    }, 
    venue:{
        type: String,


    }, 
    total_tickets_available:{
        type: Number

    },
ticket_price:{

}
});

module.exports = mongoose.model('events', events);