const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  PerguntaSchema = new Schema({
    pergunta: {
      type: String,
      required: true
    },
    palavras: {
      type: [String],
      required: true
    }
  });
module.exports = mongoose.model("perguntas", PerguntaSchema);
