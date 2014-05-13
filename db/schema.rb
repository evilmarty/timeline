# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140414113006) do

  create_table "projects", force: true do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.text     "tags"
    t.integer  "user_id"
    t.string   "api_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "projects", ["user_id"], name: "index_projects_on_user_id"

  create_table "statuses", force: true do |t|
    t.integer  "project_id",  null: false
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "start_at",    null: false
    t.datetime "finish_at"
    t.integer  "tag_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "statuses", ["project_id"], name: "index_statuses_on_project_id"
  add_index "statuses", ["tag_id"], name: "index_statuses_on_tag_id"

  create_table "users", force: true do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "access_token",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
