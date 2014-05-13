class MeController < ApplicationController
  respond_to :json

  def create
    self.current_user = User.create user_params
    respond_with current_user, serializer: MeSerializer, location: false
  end

  def show
    respond_with current_user, serializer: MeSerializer
  end

  def update
    current_user.update_attributes user_params
    respond_with current_user do |format|
      format.json{ render json: current_user, serializer: MeSerializer }
    end
  end

  private

  def user_params
    params.permit :name, :email, :current_password, :password, :password_confirmation
  end
end
