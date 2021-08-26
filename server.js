const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const uuid =require
const PORT = process.env.PORT || 3002;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up express

app.use(express.static('public'));

//route for homepage
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//route to open a note
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//api of notes that can be added using json
app.get('/api/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '.db/note.json'))
);

//posting a saved note
app.post('/api/notes', (req,res) => {
  const newNote ={
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  }
})

app.delete('api/notes/:id', (req,res)=>{
})

app.listen(PORT, () =>
  console.log(`Note Taking at http://localhost:${PORT}`)
);