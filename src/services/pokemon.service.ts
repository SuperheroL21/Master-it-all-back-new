export interface PokemonType {
  name: string;
  color: string;

}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  dexNumber: string;
  types: PokemonType[];
}

export interface CreatePokemonInput {
  name: string;
  image: string;
  dexNumber: string;
}

const STARTER_POKEMON: Pokemon[] = [
  {
    id: 0,
    name: "Squirtsssssle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
    types: [
      {
        name: "water",
        color: "blue"
      }
    ]
  },
  {
    id: 1,
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
        types: [
      {
        name: "water",
        color: "blue"
      }
    ]
  },
  {
    id: 2,
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    dexNumber: "001",
        types: [
      {
        name: "grass",
        color: "green"
      }
    ]
  },
  {
    id: 3,
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    dexNumber: "004",
        types: [
      {
        name: "fire",
        color: "red"
      }
    ]
  },
   {
    id: 4,
    name: "Sylveon ",
    image: "https://www.clipartmax.com/png/middle/123-1230989_eveelution-sylveon-by-alpha-mon-on-deviantart-sylveon.png",
    dexNumber: "700",
    types: [{ name: "Fairy", color: "#FF69B4" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 5,
    name: "gastly",
    image: "https://www.clipartmax.com/png/middle/286-2865052_well-you-can-complete-your-math-worksheet-hide-it-gastly-png.png",
    dexNumber: "092",
    types: [{ name: "Ghost", color: "#800080" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 6,
    name: "chimchar",
    image: "https://www.clipartmax.com/png/middle/203-2038442_fire-monkey-pokemon-35-fit-max-h-1536-w-s-fire-monkey.png",
    dexNumber: "390",
    types: [{ name: "Fire", color: "#F08030" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 7,
    name: "mega-steeelix",
    image: "https://www.clipartmax.com/png/middle/198-1987708_steelix-wallpaper-pokemon-glalie-mega-evolution.png",
    dexNumber: "208",
    types: [{ name: "steel", color: "#C0C0C0" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 8,
    name: "eevee",
    image: "https://www.pngmart.com/files/23/Eevee-PNG-Isolated-Pic.png",
    dexNumber: "133",
    types: [{ name: "normal", color: "#A8A878" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  },
  {
    id: 9,
    name: "snorlax",
    image: "https://www.clipartmax.com/png/middle/30-307195_snorlax-pokemon-dibujo.png",
    dexNumber: "143",
    types: [{ name: "normal", color: "#A8A878" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 10,
    name: "mankey",
    image: "https://www.clipartmax.com/png/middle/115-1152147_discover-ideas-about-pokemon-games-mankey-hd-png.png",
    dexNumber: "056",
    types: [{ name: "Fighting", color: "#A52A2A" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 11,
    name: "machamp",
    image: "https://www.clipartmax.com/png/middle/146-1468633_what-would-you-do-if-you-had-an-extra-pair-of-arms.png",
    dexNumber: "068",
    types: [{ name: "Fighting", color: "#A52A2A" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 12,
    name: "Darkrai",
    image: "https://www.clipartmax.com/png/middle/110-1103111_down-harmful-light-from-above-it-is-a-powerful-addition-pokemon-darkrai.png",
    dexNumber: "491",
    types: [{ name: "dark", color: "#000000" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  }, 
  {
    id: 13,
    name: "fenikin",
    image: "https://www.clipartmax.com/png/middle/21-214098_my-first-vector-of-fennekin-fennekin-transparent-background.png",
    dexNumber: "653",
    types: [{ name: "Fire", color: "#F08030" }],
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
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
    types: [
      {
        name: "water",
        color: "blue"
      }
    ]
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
