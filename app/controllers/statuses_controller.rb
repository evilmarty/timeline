class StatusesController < ApplicationController
  respond_to :json

  def create
    respond_with scope.create(create_params)
  end

  def index
    respond_with scope.where(index_params)
  end

  def show
    respond_with status
  end

  def destroy
    status.destroy
    respond_with status
  end

private

  def status
    @status ||= scope.find params[:id]
  end

  def scope
    current_user.statuses
  end

  def create_params
    params.require(:status).permit(:title, :description, :tag_id, :start_at, :finish_at, :project_id)
  end

  def index_params
    params.permit(:project_id)
  end
end
