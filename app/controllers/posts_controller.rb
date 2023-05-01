class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # コメントアウトする
  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }
    # redirect_to root_path
  end
end
