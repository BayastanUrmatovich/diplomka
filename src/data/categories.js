import beansImage from "../assets/beans.jpeg";
import accessoriesImage from "../assets/accessories.jpeg";
import teaImage from "../assets/tea.webp";

const categories = [
  {
    categoryId: "coffee-beans",
    title: "Haori raincoat",
    image: beansImage,
    desciption: "Haori ( Jap. 羽織) is a straight-cut Japanese jacket without buttons , worn over a kimono or with a hakama ."
  },
  {
    categoryId: "tea",
    title: "Death Note",
    image: teaImage,
    desciption: "If you write the name of the victim in a notebook, he will die, you can also write how he will die."
  },
  {
    categoryId: "accessories",
    title: "Shuriken ",
    image: accessoriesImage,
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