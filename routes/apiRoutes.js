const apiRouter = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require ('../helpers/fsUtils');
const uuid = require ('../helpers/uuid');

//api of notes that can be added using json
apiRouter.get('/notes', (req, res) => 
readFromFile('./db/note.json','utf8').then((data) => res.json(JSON.parse(data)))
);

//posting a saved note
apiRouter.post('/notes', (req,res) => {
    console.log(req.body)
    const newNote ={
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    }
});


apiRouter.delete('/notes/:id', (req,res)=>{
})

module.exports = apiRouter;