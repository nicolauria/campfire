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
Message.destroy_all

# ----------

yoda = User.create(username: 'Yoda', email: 'yoda@aol.com', password: 'secret')
obi_wan = User.create(username: 'Obi-Wan', email: 'obi-wan@aol.com', password: 'secret')
han_solo = User.create(username: 'Han Solo', email: 'han-solo@aol.com', password: 'secret')
chewbacca = User.create(username: 'Chewbacca', email: 'chewbacca@aol.com', password: 'secret')
anakin = User.create(username: 'Anakin', email: 'anakin@aol.com', password: 'secret')
r2_d2 = User.create(username: 'R2D2', email: 'r2d2@aol.com', password: 'secret')
c3po = User.create(username: 'C3PO', email: 'c3po@aol.com', password: 'secret')
qui_gon = User.create(username: 'Qui-Gon', email: 'qui-gon@aol.com', password: 'secret')
darth_maul = User.create(username: 'Darth Maul', email: 'darth-maul@aol.com', password: 'secret')
darth_vader = User.create(username: 'Darh Vader', email: 'darth-vader@aol.com', password: 'secret')
ewok = User.create(username: 'Ewok', email: 'ewok@aol.com', password: 'secret')
luke = User.create(username: 'Luke', email: 'luke@aol.com', password: 'secret')


naboo = Channel.create(name: "naboo", private: false,
  description: "An idyllic world close to the border of the Outer Rim Territories.",
  direct_message: false)

naboo = Channel.create(name: "Tatooine", private: false,
  description: "A harsh desert world orbiting twin suns in the galaxy’s Outer Rim.",
  direct_message: false)

naboo = Channel.create(name: "Jedi Temple", private: false,
  description: "The Jedi Temple is the home of the Jedi Order on Coruscant.",
  direct_message: false)

naboo = Channel.create(name: "Millennium Falcon", private: false,
  description: "The famous starship of Han Solo.",
  direct_message: false)

naboo = Channel.create(name: "Endoor", private: false,
  description: "The lush, forest home of the Ewok species.",
  direct_message: false)

naboo = Channel.create(name: "Death Star", private: false,
  description: "The Empire’s ultimate weapon: a moon-sized space station.",
  direct_message: false)

naboo = Channel.create(name: "Death Star", private: false,
  description: "The Empire’s ultimate weapon: a moon-sized space station.",
  direct_message: false)

naboo = Channel.create(name: "Cloud City", private: false,
  description: "A floating metropolis of sophisticated beauty and political freedom.",
  direct_message: false)

naboo = Channel.create(name: "Corellia", private: false,
  description: "The first planet from the star Corell.",
  direct_message: false)

naboo = Channel.create(name: "Corellia", private: false,
  description: "The first planet from the star Corell.",
  direct_message: false)

naboo = Channel.create(name: "Jaku", private: false,
  description: "A frontier dessert world.",
  direct_message: false)
