const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  news: [{ type: mongoose.Schema.Types.ObjectId, ref: 'News' }]  // Referencia a noticias
});

module.exports = mongoose.model('Category', CategorySchema);
