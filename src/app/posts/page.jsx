import Link from "next/link";
import PostId from "./[postId]/page";

const PostPage = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json();
    return (
        <div className="grid grid-cols-3 gap-3 my-4">
            {
                posts.map(post => <div key={post.id} className="card card-dash bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}>
                                <button className="btn btn-primary">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default PostPage;