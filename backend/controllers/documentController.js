import asyncHandler from "express-async-handler";
import Document from '../models/documentModel.js'

// @desc    Fetch All Documents
// @route   GET /api/documents
// @access  Public
exports.getAllProducts = (req, res) => {
	let order = req.query.order ? req.query.order : "asc";
	let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
	let limit = req.query.limit ? parseInt(req.query.limit) : 10;
  
	Product.find()
	  .select("-photo")
	  .populate("category")
	  .sort([[sortBy, order]])
	  .limit(limit)
	  .exec((error, products) => {
		if (error) {
		  return res.status(400).json({
			error: "Products not found",
		  });
		}
		res.json(products);
	  });
  };

// @desc    Fetch Single Product
// @route   GET /api/products/:id
// @access  Public
const getDocumentById = asyncHandler(async (req, res) => {
	const document = await Document.findById(req.params.id);
	if (document) {
		res.json(document);
	} else {
		res.status(404);
		throw new Error("Document not found!");
	}
});

// @desc    Fetch Single Product
// @route   GET /api/products/:id
// @access  Public


export { getAllDocuments , getDocumentById };
