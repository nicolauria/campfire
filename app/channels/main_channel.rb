class MainChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    stream_from "main_channel"

    # channel_room = Channel.find(@params['id'])
    # stream_for channel_room

    # if (!channel_room.private || channel_room.users.include?(current_user))
    #   stream_from channel_room
    # end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # debugger
    Message.create(data['message'])
  end
end
