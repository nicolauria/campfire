json.extract! user, :id, :username, :email
# json.photoUrl url_for(user.photo)

if user.photo.attached?
  json.photoUrl url_for(user.photo)
end
