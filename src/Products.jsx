import { useNavigate, useParams } from "react-router-dom";

const products = [
  { id: 1, image: "", title: "milk🥛" },
  { id: 2, image: "", title: "cheese🧀" },
  { id: 3, image: "", title: "avocado🥑" },
];

export default function Products() {
  const goTo = useNavigate();
  const { productId } = useParams();
  console.log(productId);

  const product = products.find((product) => product.id == productId);

  return (
    <>
      <h1>Products</h1>
      {product?.title} {/* optional chaining operator */}
      <button onClick={() => goTo("/")}>go back Home</button>
    </>
  );
}
