Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"

  resources :lists do
    resources :applications
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
