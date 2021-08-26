const apiRouter = require('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require ('../helpers/fsUtils');
const uuid = require ('../helpers/uuid');

//api of notes that can be added using json
apiRouter.get('/notes', (req, res) => 
  readFromFile('./db/note.json','utf8').then((data) => res.json(JSON.parse(data)))
);

//posting a saved note
apiRouter.post('/notes', (req,res) => {
  if(req.body){
    req.body.id = uuid();
    readAndAppend(req.body,"./db/note.json");
    res.json(`Note added successfully`);
  } else {
    console.error
  }
});


// apiRouter.delete('/notes/:id', (req,res)=>{
// })

module.exports = apiRouter;
