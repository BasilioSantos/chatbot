const mongoose = require('mongoose'),
Schema = mongoose.Schema,
BaseSchema = new Schema({
    nome: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("bases", BaseSchema)
