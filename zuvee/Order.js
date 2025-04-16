const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  product: String,
  size: String,
  color: String,
  status: { type: String, default: "Paid" },
});

module.exports = mongoose.model("Order", orderSchema);
