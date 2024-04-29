import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
  },
  { timestamps: true }
);

// Board Schema
const BoardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
      },
    ],
  },
  { timestamps: true }
);

// List Schema
const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
      },
    ],
  },
  { timestamps: true }
);

// Card Schema
const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: String,
    labels: [String],
    attachments: [String],
    listId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  },
  { timestamps: true }
);

export const Board = mongoose.model("Board", BoardSchema);
export const User = mongoose.model("User", UserSchema);
export const List = mongoose.model("List", ListSchema);
export const Card = mongoose.model("Card", CardSchema);
