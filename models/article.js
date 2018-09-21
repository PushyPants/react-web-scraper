const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  href: { type: String, required: true, unique: true },
  snippet: { type: String, required: false, maxlength: 500 },
  saved: { type: Boolean, default: false },
  imgUrl: {type: String, required: true}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
