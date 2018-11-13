User.destroy_all
Channel.destroy_all
Subscription.destroy_all
Message.destroy_all

general = Channel.create(name: "General", private: false,
  description: "Words, once they are printed, have a life of their own.",
  direct_message: false)

anchorman = Channel.create(name: "Anchorman", private: false,
  description: "The Legend of Ron Burgundy.",
  direct_message: false)

forest_gump = Channel.create(name: "Forest Gump", private: false,
  description: "You never know what you're gona get.",
  direct_message: false)

up = Channel.create(name: "Up", private: false,
  description: "South America. It's like America, but south.",
  direct_message: false)

good_will_hunting = Channel.create(name: "Good Will Hunting", private: false,
  description: "Son of a bitch... He stole my line.",
  direct_message: false)

the_departed = Channel.create(name: "The Big Lebowski", private: false,
  description: "I'm the Dude, so that's what you call me.",
  direct_message: false)

old_school = Channel.create(name: "Old School", private: false,
  description: "We're going streaking!",
  direct_message: false)

gladiator = Channel.create(name: "Gladiator", private: false,
  description: "Brothers, what we do in life echoes in eternity.",
  direct_message: false)

the_last_samurai = Channel.create(name: "The Last Samurai", private: false,
  description: "A frontier dessert world.",
  direct_message: false)
