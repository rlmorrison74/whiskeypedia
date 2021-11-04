import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  deleteComment,
  createComment,
  updateComment,
} from "../services/comments";

import {
  getAllPosts,
  getOnePost,
  updatePost,
  createPost,
  deletePost,
} from "../services/posts";

import Posts from "../screens/Posts";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";
import PostDetail from "../screens/PostDetail";

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);
  
  const handlePostCreate = async (formData) => {
    const newPost = await createPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/posts");
  };
  
  const handlePostUpdate = async (id, formData) => {
    const newPost = await updatePost(id, formData)
    setPosts((prevState) => {
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post
      })
    })
    history.push('/posts')
  }
  
  const handlePostDelete = async (id)
  
}