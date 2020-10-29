import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		keywords: {
			type: String,
			required: true,
		},
		photo: {
			data: Buffer,
			contentType: String,
		},
	},
	{
		timestamps: true,
	},
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
