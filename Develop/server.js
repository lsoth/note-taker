const express = require ('express');
const path = require ('path');

const app = express();

const PORT = process.env.PORT || 3001;

const notes = require('./db/db.json');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up express

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Take Some Notes'));

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//api of notes that can be added using json
app.get('/api', (req, res) => res.json(notes));

app.listen(PORT, () =>
  console.log(`Note Taking at http://localhost:${PORT}`)
);