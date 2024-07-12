Rails.application.routes.draw do
  resources :problems do
  member do
    get 'abc'
  end
end
end