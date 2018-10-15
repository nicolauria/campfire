@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email
    if user.photo.attached?
      json.photoUrl url_for(user.photo)
    end
  end
end
