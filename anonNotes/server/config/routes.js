let Notes = require('./../controllers/notes')
let path = require('path');

module.exports = (app) =>{
  app.get('/api/notes', Notes.index);
  app.post('/api/notes', Notes.create);

  app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
