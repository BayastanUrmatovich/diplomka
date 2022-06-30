import productImage from "../assets/product.jpeg";
import samehadaImage from "../assets/samehada.jpeg"
import hidanImage from "../assets/hidan.jpeg"
import kubiImage from "../assets/kubi.jpeg"
import gariImage from "../assets/gari.jpeg"
const products = [
  {
    image: productImage,
    productId: "hazelnut",
    categoryId: "coffee-beans",
    title: "Kunai",
    description: `Kunai (く ない)  is a Japanese knife, possibly derived from a trowel . Two widely recognizable variations of the kunai are the small kunai and the large kunai. This simple tool could become a multifunctional weapon in the hands of a martial artist . The kunai is commonly associated with ninja , who used it to make holes in walls. The kunai was originally a farmer's tool but evolved into the weapon we know it today.`,
    price: 100,
  },
  {
    image: productImage,
    productId: "dark-roast",
    categoryId: "coffee-beans",
    title: "Blade Totsuka",
    description: `The Totsuka Blade (十拳 剣, Totsuka no Tsurugi ), also known as the Sakegari Long Sword (酒刈太刀, Sakegari  no Tachi ; lit. Sake Long Blade ) is a variation of the Kusanagi Blade . It is enclosed in a bottle of sake, and the blade itself is fundamentally different from any other. Instead of a physical, metallic form, the blade is essentially a liquid inside a bottle that is released and assumes that form, rather than an ordinary sword.`,
    price: 124,
  },
  {
    image: productImage,
    productId: "house-blend",
    categoryId: "coffee-beans",
    title: "Tantō 短刀 Kubikiri ",
    description: `Tantō 短刀 Kubikiri  "kubikiri" translates as "Head cutter or decapitator" i.e. with a pronounced uchizori - an internal bend, the tip of the blade is rounded, blunt and retracted, not intended for stabbing, the omote side has the form of kathiri-ha zukuri, the urate side - form hira-zukuri- (flat)`,
    price: 140,
  },
  {
    image: gariImage,
    productId: "light-roast",
    categoryId: "coffee-beans",
    title: "Sword of Garian",
    description: `The Garian Sword (ガリ アン刀, Garantoo ) is a three-pointed sword with a metal handle that extends into the blade. The handle controls the movements of the sword, as the blade can expand and be fired in the direction of the opponent, similar to an urumi; Kankurō compares this to the rudimentary control of puppets controlling a toy bamboo snake with chakra threads. In addition, each of the blades has the ability to respond to the wearer's chakra, amplifying it, changing its shape to that of a dragon, and manipulating it freely, similar to using a puppet technique. The sword is also used as part of the barrier for the joint technique Ninja Weapon Barrier: Reverse Fish Scale Formation .`,
    price: 130,
  },
  {
    image: samehadaImage,
    productId: "medium-roast",
    categoryId: "coffee-beans",
    title: "Samehada",
    description: `Samehada (鮫 肌, Samehada ; Literally " Shark Skin ") is a huge sentient Sword , similar in size to Kubikiribōchō . It has been described as "The Most Terrifying of all the swords of the Seven Swordsmen ", [1] and has also been given the nickname "Great Sword" (大刀 , Daitoo ) further emphasizing its fearsome reputation.`,
    price: 103,
  },
  {
    image: hidanImage,
    productId: "coffee-grinder",
    categoryId: "accessories",
    title: "Three-bladed Scythe",
    description: `The three-bladed scythe is Hidan 's primary weapon . Her primary purpose is to help him collect blood for his Curse ritual . Because of this, it is designed not so much to kill the target as to wound them, no matter how big or small the wound needs to be. [one]`,
    price: 100,
  },
  {
    image: productImage,
    productId: "coffee-cup",
    categoryId: "accessories",
    title: "Kiba ",
    description: `Kiba (牙, literally meaning: Fangs) is one of the mystical swords of the Seven Swordsmen of the Mist, that has been passed down from generation to generation amongst the group's members since the First Mizukage's era.[1]`,
    price: 50,
  },
  {
    image: kubiImage,
    productId: "mango-tea",
    categoryId: "tea",
    title: "Kubikiribōchō",
    description: `The Kubikiribōchō (首斬り包丁, literally meaning: Decapitating Carving Knife) is a mystical sword renowned as the "seversword" (断刀, dantō). Like the other weapons belonging to the Seven Ninja Swordsmen of the Mist, the sword is passed down from generation to generation amongst the group's members since the First Mizukage's era.[2]`,
    price: 1009,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}