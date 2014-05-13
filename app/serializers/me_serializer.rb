class MeSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :access_token, :links

  root :user

  def links
    {
      projects: projects_url
    }
  end
end
