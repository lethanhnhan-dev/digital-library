import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc    Get all categories
// @route   GET /api/orders
// @access  Private
const getAllCategories = asyncHandler(async (req, res) => {
	const categories = await Category.find({});
	res.json(categories);
});

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private
const createCategory = asyncHandler(async (req, res) => {});

export { getAllCategories, createCategory };
