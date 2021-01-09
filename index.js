const express = require('express');

const app = express();


app.get('/', (req,res) => {
    res.send("This is a change");
});

// Get Heroku port from env variable (or 5000 if doesn't exist)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});