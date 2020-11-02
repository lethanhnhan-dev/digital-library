import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getAllCategories = asyncHandler(async (req, res) => {
	const categories = await Category.find({});
	res.json(categories);
});

// @desc    Create new category
// @route   POST /api/categories/create
// @access  Private
const createCategory = asyncHandler(async (req, res) => {
	const { name } = req.body;

	const categoryExists = await Category.findOne({ name });

	if (categoryExists) {
		res.status(400);
		throw new Error("Category already exists");
	}

	const category = await Category.create({ name });
	if (name) {
		res.status(201).json({
			message: `${name} is created`,
		});
	} else {
		res.status(400);
		throw new Error("Error creating category");
	}
});

// @desc    Fetch Category by id
// @route   GET /api/categories/:id
// @access  Public
const getCategoryById = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id);

	if (category) {
		res.json(category);
	} else {
		res.status(404);
		throw new Error("Category not found");
	}
});

// @desc    Edit category by Id
// @route   PUT /api/categories/:id
// @access  Private/Admin
const editCategoryById = asyncHandler(async (req, res) => {
	const { name } = req.body;

	const category = await Category.findById(req.params.id);

	if (category){
		category.name =name;
		const updatedCategory = await category.save();
		res.json(updatedCategory);
	} else {
		res.status(404);
		throw new Error('Edit failed for category')
	}
});

// @desc    Delete category by Id
// @route   Delete /api/categories/:id
// @access  Private/Admin
const removeCategoryById = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id);

	if(category) {
		await category.remove();
		res.json('Category removed')
	} else{
		res.status(404);
		throw new Error('Category not found')
	}
})

export { getAllCategories, createCategory, getCategoryById, editCategoryById, removeCategoryById };
