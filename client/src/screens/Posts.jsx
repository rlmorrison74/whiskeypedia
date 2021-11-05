import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllPosts } from "../services/posts";

export default function Posts({ setPosts, posts }) {
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchAllPosts();
  }, []);

  console.log(posts);

  if (!posts) return <h3>Loading...</h3>;

  return (
    <div>
      <h3>Posts</h3>
      {posts?.map((post) => (
        <div key={`this post id is ${post?.id}`}>
          <Link to={`/posts/${post?.id}`}>
            <p>{post?.subject}</p>
          </Link>
          <p>{post?.user.username}</p>
          <p>{post?.comments.length} comments</p>
        </div>
      ))}
      <Link to="/posts/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
