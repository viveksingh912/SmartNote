const mongoose =require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  email: {
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default: Date.now
  }
});
module.exports=mongoose.model('user',UserSchema)