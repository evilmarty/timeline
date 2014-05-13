class ProjectSerializer < ApplicationSerializer
  attributes :id, :name, :links, :tags, :api_token

  def links
    {
      statuses: project_statuses_url(object)
    }
  end
end
