"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
// import { connectToMongo } from "./mongodb";
const app = (0, express_1.default)();
const port = process.env.PORT ?? 3000;
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api", routes_1.default);
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
