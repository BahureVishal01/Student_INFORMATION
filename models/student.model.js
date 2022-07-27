const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("Student", studentSchema);