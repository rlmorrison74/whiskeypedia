class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /posts
  def index
    @posts = Post.all.sort { |a, b| b.id - a.id }
    render json: @posts, include: [
      user: { only: ['username'] },
      comments: { only: ['id'] }
    ]
  end

  # GET /posts/1
  def show
    render json: @post, include: [
      user: { only: ['username'] },
      comments: { include: [user: { only: ['username'] }] }
    ]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @posts, include: [
        user: { only: ['username'] },
        comments: { only: ['id'] }
      ]
    else
      render json: {
        error: @post.errors,
        message: 'Authentication failed'
      },
             status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @payload[:id] == @post.user_id && @post.update(post_params)
      render json: @posts, include: [
        user: { only: ['username'] },
        comments: { only: ['id'] }
      ]
    elsif @payload[:id] != @post.user_id
      render json: {
        error: @post.errors,
        message: "Not your post, don't touch it"
      },
             status: :unauthorized
    else
      render json: {
        error: @post.errors,
        message: 'Submission does not meet database standards'
      },
             status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    if @payload[:id] == @post.user_id
      @post.destroy
      render json: { message: 'Post Deleted' }
    elsif @payload[:id] != @post.user_id
      render json: {
        message: "Not your post, don't touch it"
      },
             status: :unauthorized
    else
      render json: @post.errors
    end
  end

  # def user_posts
  #   posts = Post.where(user_id == params[:id])
  # end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:subject, :content, :imgURL)
  end
end
