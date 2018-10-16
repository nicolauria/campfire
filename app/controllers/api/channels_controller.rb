class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels
    render "api/channels/all_channels"
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      Subscription.create(user_id: current_user.id, channel_id: @channel.id)
      @channel.addedUsers.each do |user|
        Subscription.create(user_id: user.id, channel_id: @channel.id)
      end
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages
    end
  end

  def show

  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render json: "api/channels/show"
    else
      render json: @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :private, :description, :direct_message, :addedUsers)
  end
end
