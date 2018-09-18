const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  RespostaSchema = new Schema({
    resposta: {
      type: String,
      required: true
    },
    perguntas: {
      type: [Schema.Types.ObjectId],
      refer: "perguntas",
      required: true
    }
  });
module.exports = mongoose.model("respostas", RespostaSchema);
