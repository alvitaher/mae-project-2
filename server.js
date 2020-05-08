//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const Coffee = require('./models/menu.js');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
mongoose.connection.on('open' , ()=>{});
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
//___________________
// Routes
// Index
app.get('/menu', (req, res) => {
  Coffee.find({}, (error, allItems) => {
      res.render('Index', {
          menu: allItems
      })
  });

});

// New
app.get('/menu/new', (req, res) => {
  res.render('New');
});

// Default
app.get('/menu/default', (req, res) => {
  res.render('Default');
});

// Create
app.post('/menu/', (req, res) => {
  if (req.body.readyToAdd === "on") {
      req.body.readyToAdd = true;
  } else {
      req.body.readyToAdd = false;
  }
  // Use Model to create Menu Document
  Coffee.create(req.body, (error, createdCoffee) => {
      // Once created - respond to client
      res.redirect('/menu');
  });
});


// Show
app.get('/menu/:id', (req, res) => {
  // Find the specific document
  Coffee.findById(req.params.id, (error, foundCoffee) => {
      // render the Show route and pass it the foundCoffee
      res.render('Show', {
          menu: foundCoffee
      });
  });
});


// Delete
app.delete('/menu/:id', (req, res) => {
  // Delete document from collection
  Coffee.findByIdAndRemove(req.params.id, (err, menu) => {
      res.redirect('/menu');
  });
});

// Edit 
app.get('/menu/:id/edit', (req, res) => {
  // Find our document from the collection - using mongoose model
  Coffee.findById(req.params.id, (err, foundCoffee) => {
      // render the edit view and pass it the found coffee
      res.render('Edit', {
          menu: foundCoffee
      })
  });
});

// Put
app.put('/menu/:id', (req, res) => {
  req.body.readyToAdd = req.body.readyToAdd === "on" ? true : false;

  // Update the menu document using our model
  Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
      res.redirect('/menu');
  });
});

//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));