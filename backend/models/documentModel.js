import mongoose from "mongoose";
const { ObjectId } = mongoose;

const documentSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		docummentType: {
			type: String,
		},
		keywords: {
			type: String,
			required: true,
		},
		photo: {
			data: Buffer,
			contentType: String,
		},
		uploadBy: { type: ObjectId, ref: "User", required: true },
		category: {
			type: ObjectId,
			ref: "Category",
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
