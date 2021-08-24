import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const workoutSchema = new mongoose.Schema({
    date: { type: Date },
    coords: { type: Array },
    duration: { type: Number },
    distance: { type: Number },
    type: { type: String },
    elevation: { type: Number },
    speed: { type: Number },
    pace: { type: Number },
    cadence: { type: Number },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
})