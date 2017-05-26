Rails.application.routes.draw do
  resources :welcomes
  root :to => 'welcomes#index'
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
end
