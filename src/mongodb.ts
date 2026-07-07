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
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside your .env file");
}

export const connectToMongo = async (): Promise<void> => {
  try {
    // Prevent multiple connections if already connected
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("🚀 MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Stop the server if the database fails to connect
  }
};

// Optional: Global connection event listeners for better debugging
mongoose.connection.on("error", (err) => {
  console.error("⚠️ MongoDB runtime error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected");
});


export {};
