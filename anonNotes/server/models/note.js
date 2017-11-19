let mongoose = require ('mongoose'),
NoteSchema = mongoose.Schema({
  note: {type: String, required: [true, "Please enter a note"]}
}, {timestamps: true}
)
mongoose.model('Note', NoteSchema)
