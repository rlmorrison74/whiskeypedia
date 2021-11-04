import { Link } from "react-router-dom";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
                  <p>{post.subject}</p>
          </Link>
              <p>{post.user.username}</p>
              <p>{post.comments.length} comments</p>
        </div>
      ))}
          <Link to='/posts/new'>
              <button>Create</button>
          </Link>
    </div>
  );
}
