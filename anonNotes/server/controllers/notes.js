let mongoose = require('mongoose');
let Note = mongoose.model("Note");

module.exports={
  index: (req, res)=>{
    Note.find().sort({"createdAt": -1}).exec((err,notes)=>{
      if(err){
        console.log("couldn't get notes");
        res.json(err);
      }
      else{
        console.log("got the notes!");
        res.json(notes);
      }
    })
  },
  create: (req, res)=>{
    Note.create(req.body, (err, createdNote)=>{
      if(err){
        console.log("uhoh")
        console.log(err)
        res.json(err);
      }
      else{
        console.log("made the note")
        res.json(createdNote);
      }
    })
  }
}
