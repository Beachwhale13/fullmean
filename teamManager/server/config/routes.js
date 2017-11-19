let Players = require('./../controllers/players')
let path = require('path');

module.exports = (app)=>{
  app.get('/api/players', Players.index);
  app.post('/api/players', Players.create);
  app.delete('/api/players/:id', Players.delete);
  app.put('/api/players/:id/:gId/NP', Players.notPlay);
  app.put('/api/players/:id/:gId/P', Players.play);
  app.put('/api/players/:id/:gId/U', Players.undecided);


  app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
