const express = require ('express');
const PORT = process.env.PORT || 3002;
const app = express();
const path = require ('path');
const apiRouter = require('./routes/apiRoutes');

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route to open a note
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//route to api
app.use('/api', apiRouter)

module.exports = app;

app.listen(PORT, () =>
  console.log(`Note Taking at http://localhost:${PORT}`)
); 