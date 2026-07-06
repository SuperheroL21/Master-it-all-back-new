"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPokemon = exports.getStarters = void 0;
const pokemon_service_1 = require("../services/pokemon.service");
const getStarters = (_req, res) => {
    const pokemon = (0, pokemon_service_1.getAllPokemon)();
    res.json({ pokemon });
};
exports.getStarters = getStarters;
// MongoDB controller boilerplate (uncomment when getAllPokemon/createPokemon are async)
//
// export const getStarters = async (
//   _req: Request,
//   res: Response
// ): Promise<void> => {
//   const pokemon = await getAllPokemon();
//   res.json({ pokemon });
// };
const addPokemon = (req, res) => {
    const { name, image, dexNumber } = req.body;
    if (!name?.trim() || !image?.trim() || !dexNumber?.trim()) {
        res.status(400).json({ error: "name, image, and dexNumber are required" });
        return;
    }
    const pokemon = (0, pokemon_service_1.createPokemon)({
        name: name.trim(),
        image: image.trim(),
        dexNumber: dexNumber.trim(),
    });
    res.status(201).json({ pokemon });
};
exports.addPokemon = addPokemon;
// export const addPokemon = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { name, image, dexNumber } = req.body as {
//     name?: string;
//     image?: string;
//     dexNumber?: string;
//   };
//
//   if (!name?.trim() || !image?.trim() || !dexNumber?.trim()) {
//     res.status(400).json({ error: "name, image, and dexNumber are required" });
//     return;
//   }
//
//   const pokemon = await createPokemon({
//     name: name.trim(),
//     image: image.trim(),
//     dexNumber: dexNumber.trim(),
//   });
//
//   res.status(201).json({ pokemon });
// };
