import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <h1 className="text-4xl font-semibold">
      Details about the product {productId}
    </h1>
  );
};
export default ProductDetails;
