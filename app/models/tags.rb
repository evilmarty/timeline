class Tags
  include Enumerable

  attr_reader :project, :values

  def initialize project, values
    @project, @values = project, values
  end

  def size
    values.size
  end

  alias_method :length, :size

  def to_ary
    values.each_with_index.map{|_, i| tag(i) }
  end

  def each &block
    to_ary.each &block
  end

  def find id
    to_ary.find{|item| item.id == id }
  end

private

  def tag index = size
    Tag.new self, index
  end
end
