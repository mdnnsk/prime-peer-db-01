var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assignmentSchema = new Schema({
  assignment_number: {type:Number,unique:true},
  student_name: String,
  score: Number,
  date_completed: Date

});

var assignments=mongoose.model('assignments', assignmentSchema);
module.exports=assignments;
