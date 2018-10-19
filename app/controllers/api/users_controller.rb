class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      channel = Channel.find_by_name('Jedi Temple');
      Subscription.create(user_id: @user.id, channel_id: channel.id)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :photo)
  end
end
