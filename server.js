require('dotenv').config();
const express = require('express');
const app = express();
const PORT=process.env.PORT || 3001;
const connectDB = require('./config/db');
const phonebookRouter = require('./routers/phonebookRouter');


// Set up middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mount the phonebook router at the '/phonebooks' URL path
app.use('/api', phonebookRouter);

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
