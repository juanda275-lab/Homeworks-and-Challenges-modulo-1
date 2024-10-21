const Category = require('../models/categoryModel');

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las categorías
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('news');
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener una categoría por ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('news');
    if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una categoría
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una categoría
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
