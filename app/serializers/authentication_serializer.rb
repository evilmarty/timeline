class AuthenticationSerializer < ApplicationSerializer
  root :user

  attributes :id, :name, :email, :access_token
end
