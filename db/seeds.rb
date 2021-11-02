# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

@user = User.create!(username: 'rlmorrison', email: 'rlmorrison.74@gmail.com', password: '123456')
puts "#{User.count} users created"
Post.create!(subject: 'Killing myself', content: 'This is how the world ends', imgURL: 'Google.com', user: @user)
puts "#{Post.count} posts created"
