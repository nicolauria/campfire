json.extract! user, :id, :username, :email

if user.photo.attached?
  json.photoUrl url_for(user.photo)
else
  json.photoUrl "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d7f8f1bcd51193684473ad1f363f3d317ab33ace/slack.png"
end
