
const PostId = async ({ params }) => {
    const { postId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await res.json()
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>

            </div>
        </div>
    );
};

export default PostId;