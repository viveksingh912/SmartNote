const mongoose =require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title:  {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  description: {
    type:String,
    unique:true,
    required:true,
  },
  tag:{
    type:String,
    dafault:'general'
  }
  
});
module.exports=mongoose.model('notes',NotesSchema)