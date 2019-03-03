class Api::MessagesController < ApplicationController
  def index
    channel = Channel.find(params[:channel_id])
    @messages = channel.messages.order("created_at ASC")
  end
end
