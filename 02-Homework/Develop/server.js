const express = require ('express');
const path = require ('path');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Take Some Notes'));

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);