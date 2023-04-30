//using the Express framework
const express = require('express');  //importing the Express library
const app = express(); //calling the express() function.

//When the server eceives a request,  The middleware function sets the response status to 
//200 and returns a JSON object with a message property set to "It works!".
app.use((req, res, next)=> {   //The app.use() function is used to define middleware functions for the application
    res.status(200).json({
        message: 'It works!'   
    });

})

module.exports = app; //allows other parts of the application to use this server configuration.