interface Images {
  [index: number]: Image
}

interface Image {
  id: number,
  src: string,
  alt?: string,
}

export const images: Images = [
  { id:1, src: '/spartana_1.jpg', alt: "Farinata e salsa di pomodoro" },
  { id:2, src: '/spartana_2.jpg', alt: "Pizza acciughe, bufala e fiori di zucca"},
  { id:3, src: '/spartana_3.jpg', alt: "Impasto pizza"},
]