const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    dueDate:{
        type: Date,
        default: new Date()
    },
    priority:{
        type: Number,
        default: 1
    },
    status:{
        type: String,
        default: "New"
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdDate:{
        type: Date,
        default: new Date()
    }
})
module.exports = mongoose.model("todo", TodoSchema);