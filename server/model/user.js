const mongoose = require('mongoose')


const user = new mongoose.Schema({
    name:{
        type:String
        
    },
    BookedTicket:[
        {
            eventId:{type: mongoose.Schema.Types.ObjectId, ref:'events'},
            NumberOfTicket:{
                type:Number

            },
            totalPrice:{
                type: Number
            }

        }
    ]

})