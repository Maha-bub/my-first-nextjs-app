
const PostPage = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json();
    return (
        <div>
            {
                posts.map(post => <div key={post.id} className="card card-dash bg-base-100 w-96">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.body}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default PostPage;