import Product from "src/app/types/Product";


export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 12",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: "1000$"
    },
    picture: "iphone/phone1.png"
  },
  {
    id: 2,
    name: "Airpods",
    specifications: {
      color: "white",
      weight: "50g",
      storage: "N/A",
      price: "200$"
    },
    picture: "airpods/airpods1.png"
  },
  {
    id: 3,
    name: "Samsung S22",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "512GB",
      price: "900$"
    },
    picture: "s22/s22-1.png"
  },
  {
    id: 4,
    name: "Samsung Note10",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: "950$"
    },
    picture: "note10/note10-1.png"
  },
  {
    id: 5,
    name: "Phone 14",
    specifications: {
      color: "white",
      weight: "250g",
      storage: "256GB",
      price: "1300$"
    },
    picture: "iphone14/iphone14-1.png"
  }
]
