const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
   },
   title: {
      type: String,
      required: true,
   }, // String is shorthand for {type: String}
   description: {
      type: String,
      required: true,
   },
   tag: {
      type: String,
      dafault: "general",
   },
});
module.exports = mongoose.model("notes", NotesSchema);
