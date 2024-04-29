import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Restaurant name is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    cuisine: {
      type: [String],
      required: [true, "At least one cuisine type is required."],
    },
    openingHours: {
      type: Map, // days to opening hours
      of: String,
      required: [true, "Opening hours are required."],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required."],
    },
    website: String,
    averageCost: {
      type: Number,
      required: [true, "Average cost is required."],
    },
  },
  { timestamps: true }
);

// Review
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: [true, "Restaurant is required."],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required."],
      min: [1, "Minimum rating is 1."],
      max: [5, "Maximum rating is 5."],
    },
    comment: String,
  },
  { timestamps: true }
);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export const Review = mongoose.model("Review", reviewSchema);
export const User = mongoose.model("User", userSchema);
