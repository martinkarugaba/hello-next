import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1 className="font-bold text-5xl">Homepage</h1>
      <Link href="/blog">Blog</Link>
      <Link href="product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};
export default Home;
