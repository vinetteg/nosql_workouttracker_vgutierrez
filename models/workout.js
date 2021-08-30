const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter excercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of excercise",
      },
      duration: {
        type: Number,
        required: "Enter minutes",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", fitSchema);

module.exports = Workout;
