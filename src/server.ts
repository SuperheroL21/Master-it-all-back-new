import cors from "cors";
import express, { Application } from "express";
import routes from "./routes";
// import { connectToMongo } from "./mongodb";

const app: Application = express();
const port = process.env.PORT ?? 3000;


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", routes);

// MongoDB startup boilerplate (uncomment when ready)
//
// const startServer = async (): Promise<void> => {
//   await connectToMongo();
//
//   app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
// };
//
// startServer().catch((error) => {
//   console.error("Failed to start server:", error);
//   process.exit(1);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
