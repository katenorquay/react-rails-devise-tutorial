Rails.application.routes.draw do
  root :to => 'welcomes#index'
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
end
