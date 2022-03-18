const mongoose = require("mongoose");

const EntreMainSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

module.exports =
  mongoose.models.EntreMain || mongoose.model("EntreMain", EntreMainSchema);
