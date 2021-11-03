class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  # POST /posts/:post_id/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/:post_id/comments/1
  def update
    if @payload[:id] == @comment.user_id && @comment.update(comment_params)
      render json: @comment
    elsif @payload[:id] != @comment.user_id
      render json: {
        error: @comment.errors,
        message: "Not your comment, don't touch it"
      },
             status: :unauthorized
    else
      render json: {
        error: @comment.errors,
        message: 'Submission does not meet database standards'
      },
             status: :unprocessable_entity
    end
  end

  # DELETE /posts/post_id/comments/1
  def destroy
    if @payload[:id] == @comment.user_id
      @comment.destroy
      render json: { message: 'Comment Deleted' }
    elsif @payload[:id] != @comment.user_id
      render json: {
        message: "Not your comment, don't touch it"
      },
             status: :unauthorized
    else
      render json: @comment.errors
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def comment_params
    params.require(:comment).permit(:content, :user_id, :post_id)
  end
end
