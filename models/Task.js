const { model, Schema } = require('mongoose')

const Task = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = model('Task', Task)