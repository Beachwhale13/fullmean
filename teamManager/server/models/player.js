let mongoose = require ('mongoose'),
PlayerSchema = mongoose.Schema({
  name : {type: String, required: [true, "Please enter a name"], minlength:[2, "Please enter a longer name"]},
  position : {type: String},
  game1: {type: String, enum: ['P', 'NP', 'U'], default: 'NP'},
  game2: {type: String, enum: ['P', 'NP', 'U'], default: 'NP'},
  game3: {type: String, enum: ['P', 'NP', 'U'], default: 'NP'}
  }, {timestamps: true},
)

mongoose.model('Player', PlayerSchema)
