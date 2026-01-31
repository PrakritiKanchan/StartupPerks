const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  description: String,
  locked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Deal", dealSchema);
