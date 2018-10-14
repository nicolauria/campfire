Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :channels, only: [:index, :create, :destroy, :show] do
      resources :messages, only: [:index]
    end
  end

  mount ActionCable.server, at: '/cable'
end
