json.array!(@channels) do |channel|
  json.id channel.id
  json.name channel.name
  json.private channel.private
  json.description channel.description
  json.direct_message channel.direct_message
  json.users (channel.users) do |user|
    json.extract! user, :id, :username, :email
    if user.photo.attached?
      json.photoUrl url_for(user.photo)
    else
      json.photoUrl "http://funkyimg.com/i/2Ma9k.png"
    end
  end
end
