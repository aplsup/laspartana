export interface Menu {
  pizze: Pizza[]
}

export interface Pizza {
  name: string,
  price: number,
  ingredients?: string[],
  tags?: Tag[]
}

enum Tag {
  BIANCA = "bianca",
  ROSSA = "rossa"
}

const menu: Menu = {
  pizze: [
    {
      name: "4 Stagioni",
      ingredients: ["pomodoro, mozzarella", "cotto", "funghi", "carciofi"],
      price: 650,
      tags: [Tag.ROSSA],
    },
    {
      name: "Valtellina",
      ingredients: ["pomodoro", "mozzarella", "bresaola", "rucola"],
      price: 800,
      tags: [Tag.ROSSA],
    },
    {
      price: 700,
      name: "Amara",
      tags: [Tag.ROSSA],
      ingredients: ["pomodoro", "mozzarella", "stracchino", "radicchio"],
    },
    {
      price: 750,
      tags: [Tag.ROSSA],
      name: "Baciami",
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "salame piccante", "aglio", "cipolla"],
    },
    {
      price: 800,
      tags: [Tag.ROSSA],
      name: "Balsamica",
      ingredients: ["pomodoro", "mozzarella", "crudo", "rucola", "crema di aceto"],
    },
    {
      price: 800,
      tags: [Tag.ROSSA],
      name: "Chic",
      ingredients: ["pomodoro", "mozzarella", "acciughe", "capperi", "burrata"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Cotto",
      ingredients: ["pomodoro", "mozzarella", "cotto"],
    },
    {
      price: 600,
      name: "Cotto e Wurstel",
      ingredients: ["pomodoro", "mozzarella", "cotto", "wurstel"],
    },
    {
      price: 600,
      name: "Wurstel",
      ingredients: ["pomodoro", "mozzarella", "wurstel"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Cotto e Funghi",
      ingredients: ["pomodoro", "mozzarella", "cotto", "funghi"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Calzone",
      ingredients: ["pomodoro", "mozzarella", "cotto"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Crudo",
      ingredients: ["pomodoro", "mozzarella", "crudo"],
    },
    {
      price: 800,
      tags: [Tag.ROSSA],
      name: "Crudo e Porcini",
      ingredients: ["pomodoro, mozzarella", "crudo", "porcini"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Capricciosa",
      ingredients: [
        "pomodoro",
        "mozzarella",
        "cotto",
        "carciofi",
        "funghi",
        "olive"
      ],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Di Bordo",
      ingredients: ["pomodoro", "mozzarella", "tonno"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Del Becia",
      ingredients: ["pomodoro", "mozzarella", "cipolla"],
    },
    {
      price: 850,
      tags: [Tag.ROSSA],
      name: "Dea",
      ingredients: ["pomodoro", "mozzarella", "crudo", "porcini", "rucola", "pomodorini"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Del Cuoco",
      ingredients: ["pomodoro", "mozzarella"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Emiliana",
      ingredients: ["pomodoro", "mozzarella", "melanzane"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Focosa",
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Herbalife",
      ingredients: ["pomodoro", "mozzarella", "cipolla", "borlotti", "salsiccia"],
    },
    {
      price: 800,
      tags: [Tag.ROSSA],
      name: "L'Insalata",
      ingredients: [
        "pomodoro",
        "mozzarella",
        "cipolla",
        "rucola",
        "peperoni",
        "mais",
        "pomodoro pachino",
        "verdure a crudo"
      ],
    },
    {
      price: 500,
      tags: [Tag.ROSSA],
      name: "Margherita",
      ingredients: ["pomodoro", "mozzarella"],
    },
    {
      price: 600,
      tags: [Tag.ROSSA],
      name: "Margherita Light",
      ingredients: ["pomodoro", "mozzarella"],
    },
    {
      price: 400,
      tags: [Tag.ROSSA],
      name: "Marinara",
      ingredients: ["pomodoro", "aglio", "olio"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Napoli",
      ingredients: ["pomodoro, mozzarella", "acciughe", "capperi"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Non Dormi",
      ingredients: ["pomodoro", "mozzarella", "salsiccia", "cipolla"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Porcini",
      ingredients: ["pomodoro", "mozzarella", "porcini"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Porcellino",
      ingredients: ["pomodoro", "mozzarella", "cotto", "wurstel", "salame piccante", "salsiccia"],
    },
    {
      price: 700,
      tags: [Tag.ROSSA],
      name: "Sorrentina",
      ingredients: ["pomodoro", "mozzarella di bufala", "pomodorini"],
    },
    {
      price: 750,
      tags: [Tag.ROSSA],
      name: "Serena",
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "porcini"],
    },
    {
      name: "Soft",
      price: 650,
      tags: [Tag.ROSSA],
      ingredients: ["pomodoro", "mozzarella", "rucola"],
    },
    {
      name: "Tirolo",
      price: 700,
      tags: [Tag.ROSSA],
      ingredients: ["pomodoro", "mozzarella", "speck", "mascarpone"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Vegetariana",
      ingredients: ["pomodoro", "mozzarella", "verdure"],
    },
    {
      price: 650,
      tags: [Tag.ROSSA],
      name: "Valter",
      ingredients: ["pomodoro", "mozzarella", "pomodori secchi"],
    },
    {
      price: 800,
      tags: [Tag.ROSSA],
      name: "Reale",
      ingredients: ["pomodoro", "mozzarella", "crudo", "burrata"],
    },
  ]
}

export default menu;