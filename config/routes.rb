Rails.application.routes.draw do
  devise_for :users
  resources :welcomes
  resources :gatcas

  authenticated :user do
    root :to => 'gatcas#index', as: :authenticated_root
  end

  root :to => 'welcomes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
