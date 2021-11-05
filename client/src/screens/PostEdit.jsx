import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function PostEdit({ posts, handlePostUpdate }) {
  const { id } = useParams();
  const [post, setPost] = useState({
    subject: "",
    content: "",
    imgURL: "",
  });

  const { subject, content, imgURL } = post;

  useEffect(() => {
    const postData = () => {
      const content = posts.find((post) => post.id === Number(id));
      setPost({
        subject: content.subject,
        content: content.content,
        imgURL: content.imgURL,
      });
    };
    if (posts.length) {
      postData();
    }
    //eslint-disable-next-line
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, post);
      }}
    >
      <TextField
        id="subject"
        type="text"
        autofocus
        label="Subject"
        value={subject}
        name="subject"
        onChange={handleChange}
      />
      <br />
      <TextField
        id="imgURL"
        type="text"
        label="Image URL"
        value={imgURL}
        name="imgURL"
        onChange={handleChange}
      />
      <br />
      <TextField
        id="content"
        type="text"
        label="I'm sure your thoughts are super relevant, why don't you go ahead and share them?"
        value={content}
        name="content"
        onChange={handleChange}
      />
      <br />
      <Button type="submit" children="Update" variant="contained" />
    </form>
  );
}
