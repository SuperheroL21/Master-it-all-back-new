import cors from "cors";
import express, { Application } from "express";
import routes from "./routes";
 import { connectToMongo } from "./mongodb";

const app: Application = express();
const port = process.env.PORT ?? 3000;


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", routes);

const startServer = async (): Promise<void> => {
  await connectToMongo();

  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
