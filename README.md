
# 📅 Event Booking System

This is a server-side event booking system built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**. Users can view events, book tickets, view their bookings, and cancel bookings.

---

## 🚀 Features

- View all available events
- Book tickets for an event
- View user booking history
- Cancel a booking
- MongoDB as the database with Mongoose schema validation
- Clean RESTful API design

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Other**: dotenv, cors

---

## 📁 Folder Structure

```
.
├── controllers/
│   └── bookingController.js     # All event and booking logic
├── models/
│   ├── user.js                  # User schema
│   └── events.js                # Event schema
├── routes/
│   └── bookingRoutes.js         # API routes for bookings
├── .env                         # Environment variables (not committed)
├── index.js                    # Main entry point
└── README.md                    # Project documentation
```

---

## 🧪 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/events`      | List all events          |
| POST   | `/api/book`        | Book an event            |
| GET    | `/api/bookings/:id`| View user bookings       |
| POST   | `/api/cancel`      | Cancel a booking         |

---

## 🧰 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/NKiNU/event-booking-system.git
cd event-booking-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your `.env` file
Create a `.env` file with the following:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/asiaquest
```

### 4. Run the server
```bash
node index.js
```

