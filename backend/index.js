const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
    res.send("Hello world");
});

// Enable CORS for all routes
app.use(cors({ origin: 'https://speedy-bites.vercel.app' }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://speedy-bites.vercel.app");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
    console.log(`backend is running on port ${port}`);
});
