import express from "express";
import {
	createCategory,
	getAllCategories,
	getCategoryById,
	editCategoryById,
	removeCategoryById,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllCategories);
router.route("/create").post(protect, createCategory);
router
	.route("/:id")
	.get(getCategoryById)
	.put(protect, editCategoryById)
	.delete(protect, removeCategoryById);

export default router;
