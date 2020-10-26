import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import timeout from "connect-timeout";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Apply Middle Ware
app.use(express.json());
app.use(cors());
app.use(timeout(10000));

// App routes
app.use("/", (req, res) => {
	res.send("Hello words!");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
