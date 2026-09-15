
const PostCard = ({ post }) => {
    const { title, description, category, date } = post;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span>Publish Data: {date}</span>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;