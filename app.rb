require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'sqlite3'
require 'json'

# Инициализируем базу данных
set :database, "sqlite3:axiomus.db"

require './bin/dbclass.rb'
require './bin/apply_db.rb'
require './bin/object_class/courier_dbclass.rb'
require './bin/object_class/planshet_dbclass.rb'
require './bin/controller.rb'