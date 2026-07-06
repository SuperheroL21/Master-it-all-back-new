import { Router } from "express";
import { addPokemon, getStarters } from "../controllers/pokemon.controller";

const router = Router();

router.get("/", getStarters);
router.post("/", addPokemon);

export default router;
