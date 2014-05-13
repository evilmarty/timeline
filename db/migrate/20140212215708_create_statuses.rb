class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.belongs_to :project, null: false, index: true
      t.string :title, null: false
      t.text :description
      t.datetime :start_at, null: false, index: true
      t.datetime :finish_at, index: true
      t.belongs_to :tag, index: true
      t.timestamps
    end
  end
end
