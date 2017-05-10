Rails.application.routes.draw do

  resources :gatcas
  devise_for :users
  root"gatcas#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
