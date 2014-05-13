class ContentTypeConstraint
  def initialize *types
    @types = types.flatten
  end

  def matches? request
    content_type = request.headers['CONTENT_TYPE'].to_s
    @types.include? content_type.split(/\s*;/).first
  end
end
