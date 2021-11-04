import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import {
//   deleteComment,
//   createComment,
//   updateComment,
// } from "../services/comments";

import {
  getAllPosts,
  updatePost,
  createPost,
  deletePost,
} from "../services/posts";

import Posts from "../screens/Posts";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";
import PostDetail from "../screens/PostDetail";
import Home from "../screens/Home";

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
    const newPost = await updatePost(id, formData);
    setPosts((prevState) => {
      prevState.map((post) => (post.id === Number(id) ? newPost : post));
    });
    history.push("/posts");
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <Switch>
      <Route path="/posts/:id/edit">
        <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
      </Route>
      <Route path="/posts/new">
        <PostCreate handlePostCreate={handlePostCreate} />
      </Route>
      <Route path="/posts/:id">
        <PostDetail posts={posts} />
      </Route>
      <Route path="/posts">
        <Posts posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}