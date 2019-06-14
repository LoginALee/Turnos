var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

var userSchema = new Schema({
  Name:  {type: String, required: true, trim: true},
  Email: {type: String, lowercase:true, trim: true, required: true, unique: true},
  Pin:   {type: String, required: true, trim: true}
});

module.exports = userSchema;

