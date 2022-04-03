//PROFILE SCHEMA--------------------------------------------------------
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  guildID: { type: String, require: true },
  xp: { type: Number, default: 0 },
  claimed: { type : Array , "default" : [] },
});

const model = mongoose.model("ProfileModel", profileSchema);

module.exports = model;