import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At delectus dolore perferendis amet deleniti possimus rem rerum laudantium non, reprehenderit nisi natus nostrum nemo animi cupiditate ad nulla autem veniam.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}