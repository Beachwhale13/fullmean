let mongoose = require('mongoose');
let Player = mongoose.model('Player');

module.exports = {
  index: (req, res)=>{
    Player.find().exec((err, players)=>{
      if(err){
        // console.log("couldn't get the playerz");
        res.json(err);
      }
      else{
        // console.log("got the playerz");
        res.json(players);
      }
    })
  },
  create: (req,res)=>{
    Player.create(req.body, (err, createdPlayer)=>{
      if(err){
        // console.log("uhoh" + err);
        res.json(err);
      }
      else{
        // console.log("made the note")
        res.json(createdPlayer);
      }
    })
  },
  delete: (req, res)=>{
    console.log("in controller "+req.params.id)
    Player.remove({_id: req.params.id}, function(err){
      res.json(true);
    })
  },
  notPlay: (req, res)=>{
    var game = "game"+req.params.gId;
    Player.update({_id: req.params.id}, {$set: {[game]: "NP"}}, function (err){
      res.json(true);
    })
  },
  play: (req, res)=>{
    var game = "game"+req.params.gId;
    Player.update({_id: req.params.id}, {$set: {[game]: "P"}}, function (err){
      res.json(true);
    })
  },
  undecided: (req, res)=>{
    var game = "game"+req.params.gId;
    Player.update({_id: req.params.id}, {$set: {[game]: "U"}}, function (err){
      res.json(true);
    })
  }
}
