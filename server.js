const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require('./routes/chatRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

require ('dotenv').config();

connectDB()
const app = express();

app.use(express.json()); //To accept the json data

app.get("/", (req, res) => {
    res.send("API is Running Succesfully");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);



// app.get("/api/chat", (req, res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     const singleChat = chats.find((c) => c._id === req.params.id)
//         res.send(singleChat);
//     });



const PORT = process.env.PORT || 6000
app.listen(6000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));