TimelineApp::Application.routes.draw do
  constraints ContentTypeConstraint.new('application/json') do
    resources :statuses, except: [:new, :edit, :update]
    resources :projects, except: [:new, :edit] do
      resources :statuses, only: [:index]
    end

    resource :authentication, only: [:create]

    post 'me', to: 'me#create'
    get 'me', to: 'me#show'
    put 'me', to: 'me#update'
  end

  get '*path', to: 'assets#index', format: false

  root to: 'assets#index'
end
