# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Subscription.destroy_all

user1 = User.create(username: 'Will', email: 'will@aol.com', password: 'secret')

channel1 = Channel.create(name: 'channel1', private: false, description: 'this is channel 1',
  direct_message: false)

channel2 = Channel.create(name: 'channel2', private: false, description: 'this is channel 2',
  direct_message: true)

Subscription.create(user_id: user1.id, channel_id: channel1.id)
Subscription.create(user_id: user1.id, channel_id: channel2.id)

Message.create(body: 'this is message 1', user_id: user1.id, channel_id: channel1.id)
