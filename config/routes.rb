Rails.application.routes.draw do
  resources :problems, only: :index
end
