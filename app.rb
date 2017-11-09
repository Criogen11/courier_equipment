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
require './bin/controller.rb'