import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllPosts } from "../services/posts";
import "../styles/Screens/posts.css";
import { Button } from "@mui/material";

export default function Posts({ setPosts, posts }) {
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchAllPosts();
    //eslint-disable-next-line
  }, []);

  if (!posts) return <h3>Loading...</h3>;

  return (
    <div className="posts">
      <div className="new">
        <Link to="/posts/new" className="button">
          <Button size="large" type="button" children="Create a Post" variant="contained" />
        </Link>
      </div>
      <div className="postscontainer">
        {posts?.map((post) => (
          <div className="postcard" key={`this post id is ${post?.id}`}>
            <div className="linkcontainer">
              <Link className="postlink" to={`/posts/${post?.id}`}>
                <p>{post?.subject}</p>
              </Link>
              <p className="author">by {post?.user.username}</p>
            </div>
            <p className="commentcount">{post?.comments.length} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
}
