class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description
      t.text :tags
      t.references :user, index: true
      t.string :api_token, unique: true, null: false
      t.timestamps
    end
  end
end
