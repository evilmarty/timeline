class Status < ActiveRecord::Base
  belongs_to :project

  validates :title, presence: true
  validate :finish_at_is_after_start_at

  before_validation :set_start_at_to_now_when_nil
  before_validation :set_finish_at_to_nil_when_equal_to_start_at

  def tag
    project.tags.find tag_id
  end

  def tag= tag
    self.tag_id = tag.try :id
  end

  def start_at= time
    super convert_fixnum_to_time(time)
  end

  def finish_at= time
    super convert_fixnum_to_time(time)
  end

private

  def convert_fixnum_to_time time
    time = Time.at time / 1000 if time.is_a? Fixnum
    time
  end

  def set_start_at_to_now_when_nil
    self.start_at = Time.current unless start_at
  end

  def set_finish_at_to_nil_when_equal_to_start_at
    self.finish_at = nil if start_at == finish_at
  end

  def finish_at_is_after_start_at 
    if finish_at && finish_at < start_at
      errors.add :finish_at, :too_short
    end
  end
end
