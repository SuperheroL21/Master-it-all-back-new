export interface PokemonType {
  name: string;
  color: string;
}

// STUDENT TODO: Create a PokemonMeasurement interface here.
// It should have two string fields: `metric` and `imperial`.
// Example: { metric: "0.5m", imperial: "1'08\"" }

export interface Pokemon {
  name: string;
  image: string;
  types: PokemonType[];
  classification: string;
  height: number;
  // STUDENT TODO: Add `classification: string`
  // STUDENT TODO: Add `height: PokemonMeasurement`
  // STUDENT TODO: Add `weight: PokemonMeasurement`
}

const WATER = "#6890F0";
const GRASS = "#78C850";
const PURPLE = "#A040A0";
const FIRE = "#F08030";

const STARTER_POKEMON: Pokemon[] = [
  {
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    types: [{ name: "Water", color: WATER }],
    classification: "test",
    height: 20
    // STUDENT TODO: Add classification, height, and weight for Squirtle
    // Hint: classification = "Tiny Turtle Pokémon"
  },
  {
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    types: [
      { name: "Grass", color: GRASS },
      { name: "Poison", color: PURPLE },
    ],
    classification: "test",
     height: 20
    // STUDENT TODO: Add classification, height, and weight for Bulbasaur
    // Hint: classification = "Seed Pokémon"
  },
  {
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    types: [{ name: "Fire", color: FIRE }],
    classification: "test",
     height: 20
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  },
  {
    name: "Goku",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b88f884e-d134-4606-a5ab-0eb9bcfaaa36/dg3irsj-a65b7cfa-7b91-4115-9f4d-6e9e5ad9a191.png/v1/fill/w_1280,h_2455/mui_cc_goku_png_format_by_gogitoytb_dg3irsj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQ1NSIsInBhdGgiOiIvZi9iODhmODg0ZS1kMTM0LTQ2MDYtYTVhYi0wZWI5YmNmYWFhMzYvZGczaXJzai1hNjViN2NmYS03YjkxLTQxMTUtOWY0ZC02ZTllNWFkOWExOTEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KAiHxEowyOkKOJB-igGAwcqs-hhPFAnU1TG-ohD6yj8",
    types: [{ name: "Fire", color: FIRE }],
    classification: "test",
     height: 20
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  },
  {
    name: "Gohan",
    image: "https://p1.hiclipart.com/preview/250/569/224/teen-gohan-ssj2-dragonball-z-son-gohan-png-clipart-thumbnail.jpg",
    types: [{ name: "Fire", color: FIRE }],
    classification: "test",
     height: 20
    // STUDENT TODO: Add classification, height, and weight for Charmander
    // Hint: classification = "Lizard Pokémon"
  },
];

export const getStarterPokemon = (): Pokemon[] => STARTER_POKEMON;
