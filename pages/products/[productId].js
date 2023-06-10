import { useRouter } from "next/router";

function Product( {product}) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div key={product.id}>
            <h2>{product.id} {product.title} {product.price}</h2>
            <p>{product.description}</p>
            <hr/>
        </div>
        </>
    )
}

export default Product;

export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();

    const paths = data.map(product => {
        return {
            params: {
                productId: `${product.id}` 
            }
        }
    }) 

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context;

    console.log(`Regenerating product ${params.productId}`);
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();

    return {
        props: {
            product: data
        },
        revalidate: 10
    }

}