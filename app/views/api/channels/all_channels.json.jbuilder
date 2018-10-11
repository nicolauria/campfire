json.array!(@channels) do |channel|
  json.id channel.id
  json.name channel.name
  json.private channel.private
  json.description channel.description
  json.direct_message channel.direct_message
end
