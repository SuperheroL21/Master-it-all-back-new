import cors from "cors";
import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();
const port = process.env.PORT ?? 3000;


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
