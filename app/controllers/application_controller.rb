class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  hide_action :current_user, :current_user=

  attr_writer :current_user

  def current_user
    @current_user ||= authenticated_user || raise(AuthenticationRequired)
  end

private

  def authenticated_user
    authenticate_with_http_token do |token, options|
      User.find_by_access_token token
    end
  end
end
