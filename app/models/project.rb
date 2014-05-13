class Project < ActiveRecord::Base
  serialize :tags, Array

  has_many :statuses, :dependent => :delete_all

  validates :name, presence: true
  validates :tags, length: {maximum: 8}

  before_create :generate_api_token

  def tags
    super.presence || I18n.t('tags.default')
  end

  def tags= tags
    super Array.wrap(tags).compact.uniq
  end

  def generate_api_token
    self.api_token = SecureRandom.hex 24
  end

  def reset_api_token
    generate_api_token
    save
  end
end
