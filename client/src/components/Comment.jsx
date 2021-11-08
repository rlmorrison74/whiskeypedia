import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { updateComment, deleteComment } from "../services/comments";
import "../styles/components/comment.css";

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
    <div className="comment">
      {updateCommentToggle ? (
        <div className="onecomment">
          <div>
            <p className="commentuser">{comment?.user?.username}:</p>
            <p className="commentcontent">{comment?.content}</p>
          </div>
          {currentUser?.id === comment?.user_id && updateCommentToggle && (
            <div>
              <div className="commentsvgcontainer">
                <div
                  className="editcomment"
                  onClick={() => {
                    if (checkButtonToggle) {
                      setUpdateCommentToggle(false);
                      setCheckButtonToggle(false);
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="edit"
                    className="svg-inline--fa fa-edit fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                    ></path>
                  </svg>
                </div>
                <div
                  className="deletecomment"
                  onClick={() => {
                    if (checkButtonToggle) {
                      handleCommentDelete(postid, comment.id);
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash-alt"
                    className="svg-inline--fa fa-trash-alt fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <form
          className="commenteditform"
          onSubmit={(e) => {
            e.preventDefault();
            handleCommentUpdate(comment?.id, newComment);
          }}
        >
          <TextField
            id="content"
            type="text"
            autoFocus
            label="Edit Your Comment"
            margin="normal"
            value={content}
            name="content"
            onChange={handleChange}
            multiline={true}
            rows="5"
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
            onClick={() => {
              setUpdateCommentToggle(true);
              setCheckButtonToggle(true);
            }}
          />
        </form>
      )}
    </div>
  );
}
