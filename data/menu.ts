export interface Menu {
  pizze: Pizza[]
}

export interface Pizza {
  name: string,
  price: number,
  ingredients?: string[],
  tags?: Tag[]
}

export enum Tag {
  BIANCA = "bianca",
  ROSSA = "rossa",
  NUOVE = "nuove"
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
    {
      name: "Bianca 1",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella bufala", "lardo", "pomodorini"],
      price: 700,
    },
    {
      name: "Bianca 2",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "gorgonzola", "pesto", "pomodorini"],
      price: 700,
    },
    {
      name: "Controcorrente",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella"],
      price: 800,
    },
    {
      name: "Genovese",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "pesto"],
      price: 600,
    },
    {
      name: "Ghiottona",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "tonno", "cipolla", "gorgonzola"],
      price: 700,
    },
    {
      name: "Gustosa",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "gamberetti", "mascarpone", "rucola"],
      price: 800,
    },
    {
      name: "Formaggi",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "gorgonzola", "stracchino"],
      price: 650,
    },
    {
      name: "Favola",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "cotto", "crema di tartufo"],
      price: 750,
    },
    {
      name: "Massi",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "stracchino", "pancetta"],
      price: 650,
    },
    {
      name: "Menta",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "stracchino", "cipolla", "pesto"],
      price: 650,
    },
    {
      name: "Primavera",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "fiori di zucca", "acciughe", "burrata"],
      price: 800,
    },
    {
      name: "Ruffiana",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "gorgonzola", "pere", "noci"],
      price: 800,
    },
    {
      name: "Spartana",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "stracchino", "mortadella"],
      price: 650,
    },
    {
      name: "Tiziana",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "crema di tartufo", "grana", "crema di aceto"],
      price: 800,
    },
    {
      name: "Viziata",
      tags: [Tag.BIANCA],
      ingredients: ["mozzarella", "crema di tartufo", "porcini"],
      price: 800,
    },
    {
      tags: [Tag.NUOVE],
      price: 900,
      name: "Lagotto",
      ingredients: ["fior di latte", "mortadella tartufata", "pistacchio"]
    },
    {
      tags: [Tag.NUOVE],
      price: 900,
      name: "Marco",
      ingredients: ["fior di latte", "pomodoro", "olio agliato", "melanzane", "crudo", "grana", "basilico"]
    },
    {
      tags: [Tag.NUOVE],
      price: 700,
      name: "Del Sud",
      ingredients: ["fior di latte", "salsiccia", "friarielli"]
    },
    {
      tags: [Tag.NUOVE],
      price: 800,
      name: "S.Michele 10",
      ingredients: ["fior di latte", "pomodorini gialli", "nduja"]
    }
  ]
}

export default menu;