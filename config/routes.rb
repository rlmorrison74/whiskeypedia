Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end

  resources :users, only: :create do
    resources :posts, only: :user_posts
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
