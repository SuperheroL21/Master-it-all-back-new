export interface Pokemon {
  id: number;
  name: string;
  image: string;
  dexNumber: string;
}

export interface CreatePokemonInput {
  name: string;
  image: string;
  dexNumber: string;
}

const STARTER_POKEMON: Pokemon[] = [
  {
    id: 0,
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
  },
  {
    id: 1,
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
  },
  {
    id: 2,
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    dexNumber: "001",
  },
  {
    id: 3,
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    dexNumber: "004",
  },
];

export const getAllPokemon = (): Pokemon[] => STARTER_POKEMON;

export const createPokemon = (input: CreatePokemonInput): Pokemon => {
  // Not persisted yet — returns submitted data without storing it.
  return {
    id: 0,
    name: input.name,
    image: input.image,
    dexNumber: input.dexNumber,
  };
};

// MongoDB persistence boilerplate (uncomment when ready)
//
// import { PokemonModel } from "../models/pokemon.model";
//
// const SEED_POKEMON: CreatePokemonInput[] = STARTER_POKEMON.map(
//   ({ name, image, dexNumber }) => ({ name, image, dexNumber })
// );
//
// export const getAllPokemon = async (): Promise<Pokemon[]> => {
//   const docs = await PokemonModel.find().sort({ createdAt: 1 });
//
//   return docs.map((doc) => ({
//     id: doc.id, // string when using MongoDB
//     name: doc.name,
//     image: doc.image,
//     dexNumber: doc.dexNumber,
//   }));
// };
//
// export const createPokemon = async (
//   input: CreatePokemonInput
// ): Promise<Pokemon> => {
//   const doc = await PokemonModel.create(input);
//
//   return {
//     id: doc.id,
//     name: doc.name,
//     image: doc.image,
//     dexNumber: doc.dexNumber,
//   };
// };
//
// export const seedIfEmpty = async (): Promise<void> => {
//   const count = await PokemonModel.countDocuments();
//
//   if (count > 0) {
//     return;
//   }
//
//   await PokemonModel.insertMany(SEED_POKEMON);
// };
