class MainChannel < ApplicationCable::Channel
  def subscribed
    stream_from "main_channel"

    # if (!channel_room.private || channel_room.users.include?(current_user))
    #   stream_from channel_room
    # end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    Message.create(data['message'])
  end
end
