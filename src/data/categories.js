import haoriImage from "../assets/haori.jpeg";
import kunaiImage from "../assets/kunai.jpeg";
import deathImage from "../assets/death.webp";

const categories = [
  {
    categoryId: "coffee-haori",
    title: "Haori raincoat",
    image: haoriImage,
    desciption: "Haori ( Jap. 羽織) is a straight-cut Japanese jacket without buttons , worn over a kimono or with a hakama ."
  },
  {
    categoryId: "death",
    title: "Death Note",
    image: deathImage,
    desciption: "If you write the name of the victim in a notebook, he will die, you can also write how he will die."
  },
  {
    categoryId: "kunai",
    title: "Shuriken ",
    image: kunaiImage,
    desciption: "Shuriken ( Japanese 手裏剣) (literal translation: “shu” - hand, “ri” - hold, “ken” - sword) are metal arrows and knives from ten to twenty centimeters long with sharpening on both one and both ends. Shuriken is a Japanese concealed-carry throwing weapon (although sometimes used for strikes). It is a small blade made according to the type of everyday things: stars, needles, nails, knives, coins, and so on."
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}