//TASK SCHEMA--------------------------------------------------------
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: { type: String, require: true },
  answer: { type: String, require: true },
  xp: { type: Number, default: 0 },
  review: { type: Boolean, default: false },
  limit: { type: Number },
  claimed: { type : Array , "default" : [] },
},{ timestamps: true });

const model = mongoose.model("TaskModel", taskSchema);

module.exports = model;