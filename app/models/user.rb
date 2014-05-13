class User < ActiveRecord::Base
  has_secure_password

  has_many :projects, :dependent => :destroy
  has_many :statuses, :through => :projects do
    def create attributes = nil
      attributes = (attributes || {}).with_indifferent_access
      project_id = attributes.delete :project_id
      project = proxy_association.owner.projects.find_by id: project_id
      if project
        project.statuses.create attributes
      else
        Status.create attributes
      end
    end
  end

  before_save :generate_access_token, :if => :password_changed?

  validates :name, presence: true

  def self.authenticate attributes
    attributes ||= {}
    find_by(email: attributes[:email]).try(:authenticate, attributes[:password])
  end

  def self.find_by_access_token access_token
    find_by access_token: access_token
  end

  def generate_access_token
    self.access_token = SecureRandom.hex 24
  end

  def password_changed?
    password_digest_changed?
  end
end
