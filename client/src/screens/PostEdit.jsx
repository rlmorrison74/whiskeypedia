import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { getOnePost } from "../services/posts";
import { useHistory } from "react-router";
import "../styles/Screens/postedit.css";

export default function PostEdit({ posts, handlePostUpdate, setToggle }) {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState({
    subject: "",
    content: "",
    imgURL: "",
  });

  const { subject, content, imgURL } = post;

  useEffect(() => {
    const prefillFormData = async () => {
      const content = await getOnePost(id);
      setPost({
        subject: content?.subject,
        content: content?.content,
        imgURL: content?.imgURL,
      });
    };
    prefillFormData();
    //eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="postedit">
      <h1>Update Post</h1>
      <form
        className="posteditform"
        onSubmit={(e) => {
          e.preventDefault();
          handlePostUpdate(id, post);
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
          margin="normal"
          type="text"
          label="Image URL"
          value={imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <TextField
          id="content"
          margin="normal"
          type="text"
          label="Edit your post"
          value={content}
          name="content"
          onChange={handleChange}
          multiline={true}
          rows="10"
        />
        <Button
          type="submit"
          children="Update"
          variant="contained"
          color="success"
          sx={{ my: 2 }}
        />
        <Button
          type="button"
          children="Cancel"
          variant="contained"
          color="error"
          onClick={() => history.push(`/posts/${id}`)}
        />
      </form>
    </div>
  );
}
