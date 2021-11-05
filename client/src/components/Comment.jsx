import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { updateComment, deleteComment } from "../services/comments";

export default function Comment({
  currentUser,
  comment,
  postid,
  setCommentSection,
  setSubmitToggle,
  checkButtonToggle,
  setCheckButtonToggle,
}) {
  const [updateCommentToggle, setUpdateCommentToggle] = useState(true);
  const [newComment, setNewComment] = useState({
    content: comment.content,
    post_id: postid,
    user_id: comment.user_id,
  });
  const { content } = newComment;

  const handleChange = (e) => {
    const { value } = e.target;
    setNewComment({
      content: value,
      post_id: postid,
      user_id: currentUser.id,
    });
  };

  const handleCommentUpdate = async (comment, newComment) => {
    console.log(comment);
    const updatedComment = await updateComment(postid, comment, newComment);
    setCommentSection((prevState) => {
      prevState.map((comment) => comment.id === updatedComment.id);
    });
    setSubmitToggle((prevState) => !prevState);
    setCheckButtonToggle(true);
  };

  const handleCommentDelete = async (postid, commentid) => {
    await deleteComment(postid, commentid);
    setCommentSection((prevState) =>
      prevState.filter((comment) => comment.id !== commentid)
    );
  };

  return (
    <div>
      {updateCommentToggle ? (
        <div>
          <p>{comment?.content}</p>
          <p>{comment.user?.username}</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommentUpdate(comment.id, newComment);
          }}
        >
          <TextField
            id="content"
            type="text"
            label="Leave a comment"
            value={content}
            name="content"
            onChange={handleChange}
            multiline={true}
            rows="5"
          />
          <br />
          <Button type="submit" children="Update" variant="contained" />
          <Button
            type="button"
            children="Cancel"
            variant="contained"
            onClick={() => {
              setUpdateCommentToggle(true);
              setCheckButtonToggle(true);
            }}
          />
        </form>
      )}
      {currentUser.id === comment.user_id && updateCommentToggle && (
        <div>
          <Button
            type="button"
            children="edit"
            variant="contained"
            onClick={() => {
              if (checkButtonToggle) {
                setUpdateCommentToggle(false);
                setCheckButtonToggle(false);
              }
            }}
          />
          <Button
            type="button"
            children="delete"
            variant="contained"
            onClick={() => {
              if (checkButtonToggle) {
                handleCommentDelete(postid, comment.id);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
