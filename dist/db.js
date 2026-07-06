"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const path_1 = __importDefault(require("path"));
// SQLite is used for now. To switch to MongoDB:
// 1. Uncomment code in src/mongodb.ts and src/models/pokemon.model.ts
// 2. Set MONGODB_URI in .env
// 3. Swap service/controller code to the commented MongoDB versions
const dbPath = path_1.default.join(__dirname, "..", "pokemon.db");
const db = new better_sqlite3_1.default(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    dex_number TEXT NOT NULL
  )
`);
exports.default = db;
