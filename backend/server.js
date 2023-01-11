require('dotenv').config();
const express = require('express');

// Create Express server
const app = express();


// Get all request 
app.get('/api', (req, res) => {
    res.json({ message: 'Hello and welcome to the backend of my project' });
});

//Listen on port ENV.PORT or 5000
app.listen(process.env.PORT || 5000, () => {
  if(process.env.PORT) console.log('Server started on port ' + process.env.PORT);
  else console.log('Server started on port 5000');
});

