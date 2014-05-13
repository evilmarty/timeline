class AuthenticationsController < ApplicationController
  def create
    respond_to do |format|
      format.json do
        if user
          render json: {access_token: user.access_token}
        else
          render json: {error: "Invalid email and/or password"}, :status => :forbidden
        end
      end
    end
  end

private

  def authentication_params
    params.permit :email, :password
  end

  def user
    @user ||= User.authenticate authentication_params
  end
end
