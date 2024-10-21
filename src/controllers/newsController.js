const News = require('../models/newsModel');

// Crear una noticia
exports.createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las noticias
exports.getNews = async (req, res) => {
  try {
    const news = await News.find().populate('category');
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una noticia por ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('category');
    if (!news) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una noticia
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una noticia
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.status(200).json({ message: 'Noticia eliminada' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
