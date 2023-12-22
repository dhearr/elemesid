import {
  pizzaPaperoni,
  greenSaladTomato,
  cupcakeChoco,
  donerKebab,
  doughnutMilk,
  doughnutUnicorn,
  kathiKebab,
  pizzaMeat,
  salmonRoll,
  pizza,
  doughnut,
  salmon,
  kebab,
  chupcake,
} from "../assets";

const services = [
  {
    title: "About Us",
  },
  {
    title: "FAQ",
  },
  {
    title: "Report Problem",
  },
];

const links = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "promotions",
    title: "Promotions",
    notify: "Hot",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const products = [
  {
    id: 1,
    image: greenSaladTomato,
    name: "Green Salad Tomato",
    title: "Tomato",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
  {
    id: 2,
    image: pizzaPaperoni,
    name: "Pizza Paperoni",
    title: "Pizza",
    color: "#E6F3F5",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
  {
    id: 3,
    image: pizzaMeat,
    name: "Pizza Meat",
    title: "Pizza",
    color: "#E6F3F5",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
      { selected: false },
    ],
  },
  {
    id: 4,
    image: donerKebab,
    name: "Doner Kebab",
    title: "Kebab",
    color: "#EAEEFA",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
    ],
  },
  {
    id: 5,
    image: salmonRoll,
    name: "Salmon Roll",
    title: "Salmon",
    color: "#F9EEF3",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
  {
    id: 6,
    image: cupcakeChoco,
    name: "Cupcake Choco",
    title: "Cupcake",
    color: "#F0FEEB",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
  {
    id: 7,
    image: doughnutMilk,
    name: "Doughnut Milk",
    title: "Doughnut",
    color: "#F4F8DC",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
    ],
  },
  {
    id: 8,
    image: doughnutUnicorn,
    name: "Doughnut Unicorn",
    title: "Doughnut",
    color: "#F3F7D9",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
  {
    id: 9,
    image: kathiKebab,
    name: "Kathi Kebab",
    title: "Kebab",
    color: "#EAEEFA",
    stars: [
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: true },
      { selected: false },
    ],
  },
];

const categories = [
  {
    image: chupcake,
    name: "Chupcake",
    item: "22 items",
    color: "#F0FEEB",
  },
  {
    image: pizza,
    name: "Pizza",
    item: "25 items",
    color: "#E6F3F5",
  },
  {
    image: kebab,
    name: "Kebab",
    item: "12 items",
    color: "#EAEEFA",
  },
  {
    image: salmon,
    name: "Salmmon",
    item: "22 items",
    color: "#F9EEF3",
  },
  {
    image: doughnut,
    name: "Doughnut",
    item: "11 items",
    color: "#F3F7D9",
  },
  {
    image: chupcake,
    name: "Cake",
    item: "21 items",
    color: "#F0FEEB",
  },
  {
    image: pizza,
    name: "Burger",
    item: "15 items",
    color: "#E6F3F5",
  },
  {
    image: kebab,
    name: "Hotdogs",
    item: "17 items",
    color: "#EAEEFA",
  },
  {
    image: salmon,
    name: "Susi",
    item: "24 items",
    color: "#F9EEF3",
  },
  {
    image: doughnut,
    name: "Chocolate",
    item: "19 items",
    color: "#F3F7D9",
  },
];

export { links, products, categories, services };
