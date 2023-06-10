import Link from "next/link";
import { useRouter } from "next/router";

function FirstPage() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Viewing products main page...");
        router.push("/product");
    }

    return (<div>
        <h1>First Page</h1>
        <br />
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/product">Products</Link>
        <br />
        <Link href="/posts">Posts</Link>
        <br />
        <br />
        <button className="btn btn-primary" onClick={handleClick}>
            Product List
        </button>
    </div>);
}

export default FirstPage;

