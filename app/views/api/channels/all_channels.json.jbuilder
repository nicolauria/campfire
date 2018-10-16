json.array!(@channels) do |channel|
  # debugger
  json.id channel.id
  json.name channel.name
  json.private channel.private
  json.description channel.description
  json.direct_message channel.direct_message

  # json.channels json.array!(channel.users) do |user|
  #   json.user user.username
  # end
end
