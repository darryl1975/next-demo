import Link from "next/link";

function ProductList({ products }) {
    return (
        <>
            <h1>List of Products</h1>
            <br />
            {
                products.map(product => {
                    return (
                        <Link href={`products/${product.id}`} passHref>
                            <div key={product.id}>
                                <h2>{product.id} {product.title} {product.price}</h2>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ProductList;

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products');

    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate: 30
    }
}