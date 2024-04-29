import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required for user identification."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required for user authentication."],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    //fields can be added as needed
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required for the product."],
    },
    description: {
      type: String,
      required: [true, "Description is required for the product."],
    },
    category: {
      type: String,
      required: [true, "Category is required for the product."],
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required for the order."],
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "At least one product is required in the order."],
      },
    ],
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required for the order."],
    },
    status: {
      type: String,
      enum: ["placed", "confirmed", "shipped", "delivered"],
      default: "placed",
      required: [true, "Status is required for the order."],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
