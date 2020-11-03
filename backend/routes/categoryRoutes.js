import express from "express";
import {
	createCategory,
	getAllCategories,
	getCategoryById,
	editCategoryById,
	removeCategoryById,
} from "../controllers/categoryController.js";
import { protect, authAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllCategories);
router.route("/create").post(protect, authAdmin, createCategory);
router
	.route("/:id")
	.get(getCategoryById)
	.put(protect, authAdmin, editCategoryById)
	.delete(protect, authAdmin, removeCategoryById);

export default router;
