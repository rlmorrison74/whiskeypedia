# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Post.destroy_all
User.destroy_all

@user = User.create!(username: 'rlmorrison', email: 'rlmorrison.74@gmail.com', password: '123456')
@user2 = User.create!(username: 'NOTrlmorrison', email: 'rlmorrison.75@gmail.com', password: '123456')
puts "#{User.count} users created"
@post = Post.create!(subject: 'Killing myself', content: 'This is how the world ends', imgURL: 'Google.com',
                     user: @user)
@post2 = Post.create!(subject: 'What a beautiful world', content: 'I Love my life', imgURL: 'Google.com',
                      user: @user2)
@post3 = Post.create!(subject: 'Misery loves company', content: 'Coding is the best', imgURL: 'Google.com',
                      user: @user)
@post4 = Post.create!(subject: 'Project 4', content: 'We have SO MUCH TIME to finish p4', imgURL: 'Google.com',
                      user: @user2)
@post5 = Post.create!(subject: 'would you like a cookie?', content: 'too fucking bad', imgURL: 'Google.com',
                      user: @user)
puts "#{Post.count} posts created"
Comment.create(content: 'Hi there buddy', user: @user, post: @post)
Comment.create(content: 'Oh hey, how is it going?', user: @user2, post: @post)
Comment.create(content: 'Pretty good, you?', user: @user, post: @post)
Comment.create(content: 'Not so bad, thanks.', user: @user2, post: @post)
Comment.create(content: 'You are very welcome', user: @user, post: @post)
Comment.create(content: 'You are very welcome', user: @user2, post: @post2)
Comment.create(content: 'You are very welcome', user: @user, post: @post2)
Comment.create(content: 'You are very welcome', user: @user2, post: @post2)
Comment.create(content: 'You are very welcome', user: @user, post: @post2)
Comment.create(content: 'You are very welcome', user: @user2, post: @post2)
Comment.create(content: 'You are very welcome', user: @user, post: @post3)
Comment.create(content: 'You are very welcome', user: @user2, post: @post3)
Comment.create(content: 'You are very welcome', user: @user, post: @post3)
Comment.create(content: 'You are very welcome', user: @user2, post: @post3)
Comment.create(content: 'You are very welcome', user: @user, post: @post3)
puts "#{Comment.count} comments created!"
