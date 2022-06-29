import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
     <Header
title="Welcome to Anime store!"
image={headerImage}>
Anime (Japanese: アニメ, IPA: [aɲime] (listen)) is hand-drawn and computer-generated animation originating from Japan.Outside of Japan and in English, anime refers to Japanese animation, and refers specifically to animation produced in Japan.
</Header>
      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;

<Header
title="Welcome to Anime store!"
image={headerImage}>
Anime (Japanese: アニメ, IPA: [aɲime] (listen)) is hand-drawn and computer-generated animation originating from Japan.Outside of Japan and in English, anime refers to Japanese animation, and refers specifically to animation produced in Japan.
</Header>