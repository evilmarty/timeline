class ProjectsController < ApplicationController
  respond_to :json

  def create
    respond_with scope.create(project_params)
  end

  def index
    respond_with scope.load
  end

  def show
    respond_with project
  end

  def update
    project.update_attributes project_params
    respond_with project
  end

  def destroy
    project.destroy
    respond_with project
  end

  private

  def scope
    current_user.projects
  end

  def project
    @project ||= scope.find params[:id]
  end

  def project_params
    params.require(:project).permit(:name, :description, :tags)
  end
end
