const events = require('../model/events');
const user = require('../model/user')

const seeAllEvents = async (req, res) => {
    try {
        const allEvent = await events.find();
        res.json(allEvent);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const bookEvent = async (req, res) => {
    try {
        const { userId, ticketId, NOTicket } = req.body;


        const event = await events.findById(ticketId);
        if (NOTicket > event.total_tickets_available) {
            return res.status(400).json({ error: 'Not enough tickets available' })
        }

        if (new Date() > event.date) {
            return res.status(400).json({ error: 'Event already passed' })
        }
        const t_price = res.body.NOTicket * event.ticket_price;
        const isVIP = req.body.isVIP;

        // Check if we are within the VIP window
        const hours = (Date.now() - event.createdAt) / 1000 / 3600;

        if (hours < 24 && !isVIP) {
            return res.status(403).json({ error: 'Booking for VIPs only' })
        }

        const addEvent = await user.findByIdAndUpdate(
            { user: userId },
            {
                $push: {
                    BookedTicket: {
                        eventId: ticketId,
                        NumberOfTicket: NOTicket,
                        totalPrice: t_price
                    }
                }
            },
            { new: true }



        );
        event.total_tickets_available -= req.body.numberOfTickets;
        await event.save();

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const viewBooking = async (req, res) => {
    try {

        const userBooking = await user.findById(req.params.id);
        res.json(userBooking.BookedTicket);


    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const cancelBooking = async (req, res) => {
    try {
        const { userId, eventId } = req.body;
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

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

exports = {
    seeAllEvents,
    bookEvent,
    viewBooking,
    cancelBooking
}