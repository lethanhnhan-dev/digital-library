import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import timeout from "connect-timeout";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
// app.use(timeout(5000));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.yellow.bold,
	),
);
