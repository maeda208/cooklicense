Rails.application.routes.draw do
  root to: 'problems#index'
  resources :problems, only: :index do
    collection do
      get 'abc'
    end
    collection do
      get 'cdf'
    end
  end
end