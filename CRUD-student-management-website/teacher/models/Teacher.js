const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: String,
    age: Number,
    phone: String,
    email: String,
    Address: String,
});

module.exports = mongoose.model("Teacher", teacherSchema);