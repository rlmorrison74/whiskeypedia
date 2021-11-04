import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../services/posts";

export default function PostDetail({ handlePostDelete }) {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id);
      setPost(postData);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <img src={post?.imgURL} alt={post?.subject} />
      <h3>{post?.subject}</h3>
      <p>{post?.content}</p>
      <ul>
              {post?.comments.map((comment) => {
               return(
                      <li key={comment.id}>
                          <p>{comment?.content}</p>
                          <p>{comment?.user.username}</p>
                      </li>
                  )
              })}
      </ul>
    </div>
  );
}
