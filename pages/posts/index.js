import Link from "next/link";
import { Card, Row, Text } from '@nextui-org/react';

function PostList({ posts }) {
    return (<>
        <div class="container">
            <h1>List of Posts</h1>
            <br />
            <br />

            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>{post.id} {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
            
            {/* {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>{post.id} {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            } */}

            {
                posts.map(post => {
                    return (
                        <Card class="card text-bg-light mb-3">
                            <Card.Body class="card-body">
                                <Row key={post.id} justify="center" align="center">
                                    <Link href={`posts/${post.id}`} passHref>
                                        <Text h2 size={15} color="black">{post.id} {post.title}</Text>
                                    </Link>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    </>)
}

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return {
        props: {
            // posts: data.slice(0, 3)
            posts: data
        }
    }
}