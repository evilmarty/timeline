class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, unique: true, null: false
      t.string :password_digest, null: false
      t.string :access_token, null: false, unique: true
      t.timestamps
    end
  end
end
