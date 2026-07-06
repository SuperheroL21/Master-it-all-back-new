import { Router } from "express";
import { getStarters } from "../controllers/pokemon.controller";

const router = Router();
// localhost:3000/api/pokemon/
router.get("/", getStarters);

export default router;
