import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/Screens/postcreate.css";

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
    <div className="postcreate">
      <h1>Create a Post</h1>
      <form
        className="postcreateform"
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
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id="imgURL"
          type="text"
          margin="normal"
          label="Image URL"
          value={imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <TextField
          id="content"
          type="text"
          margin="normal"
          label="Share your story!"
          value={content}
          name="content"
          multiline={true}
          rows="10"
          onChange={handleChange}
        />
        <Button type="submit" children="Submit" variant="contained" />
      </form>
    </div>
  );
}
