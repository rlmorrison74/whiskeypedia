import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function PostCreate({ handlePostCreate, setToggle }) {
  const [post, setPost] = useState({
    subject: "",
    content: "",
    imgURL: "",
  });

  const { subject, content, imgURL } = post;

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
        handlePostCreate(post);
        setToggle((prevState) => !prevState);
      }}
    >
      <TextField
        id="subject"
        type="text"
        autoFocus
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
        label="Share your story!"
        value={content}
        name="content"
        multiline={true}
        rows="10"
        onChange={handleChange}
      />
      <br />
      <Button type="submit" children="Submit" variant="contained" />
    </form>
  );
}
