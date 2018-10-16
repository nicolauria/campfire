json.extract! user, :id, :username, :email

if user.photo.attached?
  json.photoUrl url_for(user.photo)
else
  json.photoUrl "http://funkyimg.com/i/2Ma9k.png"
end
