const express = require('express'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const app = express(); 

// Middleware setup
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('dist'));
app.use('/models', express.static('public/models'));


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views being rendered with res.render() 
app.set('views', path.join(__dirname, 'views')); 

// Set view engine as Pug 
app.set('view engine', 'pug'); 

// Define Routes
app.get('/', (req, res) => {
    res.render('index', { title: '大洋商贸' });
});

app.get('/company', (req, res) => {
  console.log("Company page requested");
  res.render('company', { title: 'Company Overview' });
});


// Start the server
app.listen(666, function () { 
  console.log('App listening on port 666!'); 
});
