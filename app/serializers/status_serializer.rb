class StatusSerializer < ApplicationSerializer
  attributes :id, :title, :description, :start_at, :finish_at, :tag_id

  has_one :project
end
