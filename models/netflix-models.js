import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

// movie schema
const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    releaseYear: { type: Number, required: [true, "Release year is required"] },
    genre: { type: String, required: [true, "Genre is required"] },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    duration: { type: Number, required: [true, "Duration is required"] },
    imageURL: { type: String },
  },
  { timestamps: true }
);

// rating schema
const userRatingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: [true, "Movie ID is required"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Rating is required"],
  },
});

export const User = mongoose.model("User", userSchema);
export const Movie = mongoose.model("Movie", movieSchema);
export const UserRating = mongoose.model("UserRating", userRatingSchema);
