"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_controller_1 = require("../controllers/pokemon.controller");
const router = (0, express_1.Router)();
router.get("/", pokemon_controller_1.getStarters);
router.post("/", pokemon_controller_1.addPokemon);
exports.default = router;
