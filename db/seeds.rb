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
@post = Post.create!(subject: 'Bourbon is life', content: 'If you were to ask me to describe my bourbon in one word, I would say incredible. I have lived my entire life loving bourbon, except for when I was younger than sixteen, and nothing is changing about that anytime soon.', imgURL: 'https://dw95zbr0bn7mn.cloudfront.net/compare/asset/40310/large_compare::product-308581-acdb4473-a959-4e8d-9b2d-6619db8e2e20.png',
                     user: @user)
@post2 = Post.create!(subject: 'And you thought you could drink', content: 'Manhattan irish coffee b & b bombay. Deanston caju amigo redline spritzer blue hawaii, canadian club bronx savoy corpse reviver. Savoy affair; bronx ketel one glen elgin blue hawaii sea breeze crown royal kamikaze, bladnoch, macduff aultmore. Orgasm glenrothes nog-a-sake gin sour ginza mary bloody aztec b & b, glen spey. Smoky martini, “glenlossie,” greyhound jagertee bumbo dufftown panama, “satan’s whiskers rusty nail; mint julep southern comfort.” Talisker general sherman mai-tai hayride old mr. boston clynelish glendullan glenlossie wolfschmitt mickey slim, chupacabra glen keith house of lords. Polmos krakow martell shirley temple black angel’s tit.', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAoJT0ctKFP883FsiYH-rtNcnB75iIeN_Cg&usqp=CAU',
                      user: @user2)
@post3 = Post.create!(subject: 'Liquor ipsum', content: 'Bloody mary glogg the blenheim saketini ectoplasm dom chivas regal. Singapore sling, “anisette hurricane talisker blair athol greyhound paralyzer,” christian brothers black tooth grin.” Miltonduff, joker mudslide glendullan jack and coke lemon split godmother crown royal strathisla finlandia ectoplasm ginza mary. Grand marnier royal arrival gin sling choking hazard gummy and coke amaretto sour montgomery glenmorangie. B & b colombia salmiakki koskenkorva dickel canadian mist, arran b & b. Johnny walker red, kir royale the blenheim gilbey’s glen spey lejon tennessee cowboy: long island iced tea.', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkZ9Y8EBLglgF9AxMcazglKJE8MZBNrZ55w&usqp=CAU',
                      user: @user)
@post4 = Post.create!(subject: 'Project 4', content: 'We have SO MUCH TIME to finish p4', imgURL: 'Google.com',
                      user: @user2)
@post5 = Post.create!(subject: 'What a wonderful world', content: 'Cutty sark scots whisky van winkle family reserve zombie, springbank lime rickey, widow’s cork. Glen scotia redline godfather bowmore bull shot aberlour gummy and coke snowball aberfeldy harvey wallbanger. Oban four horsemen critty bo old rip van winkle negroni, bloody aztec, crown royal paradise champagne cocktail redline flaming volcano. Stinger chimayó cocktail lemon split brandy manhattan presbyterian, old rip van winkle calvert glenfarclas toro rojo. Smirnoff mai-tai long island iced tea. French 75 three wise men glengoyne, bacardi orgasm balvenie strathmill bunnahabhain el presidente, dailuaine house of lords mudslide blue blazer.', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp_3P5uyd9LXlrUNn6EibJKx7Xub0bRzumw&usqp=CAU',
                      user: @user)
puts "#{Post.count} posts created"
Comment.create(content: 'Hi there buddy', user: @user, post: @post)
Comment.create(content: 'Oh hey, how is it going?', user: @user2, post: @post)
Comment.create(content: 'Pretty good, you?', user: @user, post: @post)
Comment.create(content: 'Not so bad, thanks.', user: @user2, post: @post)
Comment.create(content: 'You are very welcome', user: @user, post: @post)
Comment.create(content: 'Dude bourbon is my very favorite thing', user: @user2, post: @post2)
Comment.create(content: 'I know right? me too!', user: @user, post: @post2)
Comment.create(content: 'If I could live on bourbon and nothing else I would die happy', user: @user2, post: @post2)
Comment.create(content: 'Preach it my brother', user: @user, post: @post2)
Comment.create(content: 'Amen', user: @user2, post: @post2)
Comment.create(content: 'This post is even better than the last one', user: @user, post: @post3)
Comment.create(content: 'Thanks man', user: @user2, post: @post3)
Comment.create(content: 'You are very welcome', user: @user, post: @post3)
Comment.create(content: 'You wanna meet up and hang out for a glass?', user: @user2, post: @post3)
Comment.create(content: 'Time and place brother, time and place.', user: @user, post: @post3)
puts "#{Comment.count} comments created!"
