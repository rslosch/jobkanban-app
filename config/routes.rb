Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"

  resources :applications
  resources :lists

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
