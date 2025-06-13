const  events = require('../model/events');
const user = require('../model/user')

const seeAllEvents = async(req,res)=>{
    try{
        const allEvent = await events.find();
        res.json(allEvent);

    }catch(err){
        res.status(500).json({error:err.message})
    }

}

const bookEvent = async(req,res)=>{
    try{
        const event = events.findById(req._id);
        const t_price = res.body.NOTicket*event.ticket_price;

        const addEvent = await user.findByIdAndUpdate(
            {user: res.body.user},
            {$push:{
            BookedTicket:[
                {eventId:res.body.ticketId},
                {NumberOfTicket:res.body.NOTicket},
                {totalPrice:t_price}

            ]}}

        )

    }catch(err){
        res.status(500).json({error:err.message})
    }

}

const viewBooking = async(req,res)=>{
    try{

        const userBooking = await user.findById(req.params.id);
        res.json(userBooking.BookedTicket);


    }catch(err){
        res.status(500).json({error:err.message})
    }
    
}

const cancelBooking = async(req,res)=>{
    try{
        const {userId,eventId} = req.body;
        const user = await user.findById(userId)
        const findCanceledTicket = user.BookedTicket.findIndex(ticket => ticket.eventId.toString === eventId);
        const numberOfTicket = user.BookedTicket[findCanceledTicket].NumberOfTicket;
        user.BookedTicket.splice(ticketIndex, 1);
        await foundUser.save();


        const updateTicket = await events.findByIdAndUpdate(
            eventId,
            { $inc: { total_tickets_available: numberOfTicket } },
            { new: true }

        );
        res.json("cancel sucessfull");

    }catch(err){
        res.status(500).json({error:err.message})
    }

}

exports = {
    seeAllEvents,
    bookEvent,
    viewBooking,
    cancelBooking
}