class MainChannel < ApplicationCable::Channel
  def subscribed
    debugger
    channel_room = Channel.find(@params['id'])
    if (!channel_room.private || channel_room.users.include?(current_user))
      stream_for channel_room
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    debugger
    user = User.find(data['message']['user_id'])
    Message.create(data['message'])
  end
end
