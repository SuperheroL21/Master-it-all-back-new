import cors from "cors";
import express, { Application } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { connectToMongo } from "./mongodb";

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT ?? 3000;


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ status: "ok", message: "Server is working!" });
});

const startServer = async (): Promise<void> => {
  // Connect to MongoDB in the background (don't block server startup)
  connectToMongo().catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
