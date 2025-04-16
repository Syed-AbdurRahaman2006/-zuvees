// const express = require("express");
// const Order = require("../models/Order");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { user, product, size, color } = req.body;
//   const order = new Order({ user, product, size, color });
//   await order.save();
//   res.json({ success: true, order });
// });

// router.get("/admin", async (req, res) => {
//   const orders = await Order.find();
//   res.json(orders);
// });

// router.get("/rider/:riderId", async (req, res) => {
//   const orders = await Order.find({ riderId: req.params.riderId });
//   res.json(orders);
// });

// module.exports = router;



// backend/routes/orderRoutes.js

const express = require("express");
const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.json({ message: "Orders route is working!" });
});

module.exports = router;
