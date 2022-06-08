import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title="Choose a product from your favorite anime!"
        image={headerImage}>
        Our products from:Death Note,Naruto,One Piece
, Doctor stone, Attack on Titan, Dragon Ball Z, One-Punch Man, Demon Slayer.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;