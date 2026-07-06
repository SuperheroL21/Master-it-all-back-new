"use strict";
// MongoDB connection boilerplate (uncomment when ready)
//
// 1. npm install mongoose dotenv
// 2. Set MONGODB_URI in your .env file
// 3. Uncomment the code below and call connectToMongo() from server.ts
//
// import dotenv from "dotenv";
// import mongoose from "mongoose";
//
// dotenv.config();
//
// const registerMongoListeners = (): void => {
//   mongoose.connection.on("connected", () => {
//     console.log("MongoDB connected successfully");
//   });
//
//   mongoose.connection.on("error", (error) => {
//     console.error("MongoDB connection error:", error);
//   });
//
//   mongoose.connection.on("disconnected", () => {
//     console.warn("MongoDB disconnected");
//   });
//
//   mongoose.connection.on("reconnected", () => {
//     console.log("MongoDB reconnected successfully");
//   });
//
//   process.on("SIGINT", async () => {
//     await mongoose.connection.close();
//     console.log("MongoDB connection closed due to app termination");
//     process.exit(0);
//   });
// };
//
// export const connectToMongo = async (): Promise<void> => {
//   const uri = process.env.MONGODB_URI;
//
//   if (!uri) {
//     throw new Error("MONGODB_URI is not set");
//   }
//
//   registerMongoListeners();
//
//   try {
//     await mongoose.connect(uri);
//   } catch (error) {
//     console.error("MongoDB initial connection failed:", error);
//     throw error;
//   }
// };
//
// export default mongoose;
Object.defineProperty(exports, "__esModule", { value: true });
