class Tag
  include ActiveModel::SerializerSupport
  
  def initialize tags, index
    @tags, @index = tags, index
  end

  def id
    @index + 1
  end

  def project
    @tags.project
  end

  def name
    @tags.values[@index]
  end

  def name= value
    @tags.values[@index] = value
  end

  def eql? other
    other.class == self.class && other.project == project && other.id == id
  end

  alias_method :==, :eql?
  alias_method :equal?, :eql?
  alias_method :===, :eql?
end
