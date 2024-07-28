Rails.application.routes.draw do
  root to: 'problems#index'
  resources :problems, only: [:index,:show] do
    collection do
      get 'abc'
    end
    collection do
      get 'cdf'
    end
    collection do
      get 'fgh'
    end
    collection do
      get 'cook'
    end
    collection do
      get 'ccna'
    end
    collection do
      get 'cca'
    end
  end
end