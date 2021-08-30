import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: { type: [String], required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, required: true },
    shippingAdd: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      State: { type: String, required: true },
      Country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentStatus: {
      id: { type: String },
      status: { type: String },
      updateTime: { type: String },
      taxPrice: { type: String, default: 0.0 },
    },
    shippingPrice: { type: String, default: 0.0 },
    totalPrice: { type: String, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
