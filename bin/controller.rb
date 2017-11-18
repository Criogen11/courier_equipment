

get '/' do
	erb :index
end

get '/create_dbobject' do
	erb :create_dbobject
end

post '/create_dbobject' do
	query = Apply_db.new(params[:cou], params[:tab], params[:rider], params[:key])
	data = query.insert_db
	erb data
end	

post '/add_rab_rider' do	
	querya = Apply_db.new(params[:cou], params[:tab], params[:rider], params[:key])
	data = querya.off_ecuipment
	erb data
end	

post '/index_select_db' do
	data = Courier_querydb.new
	aa = data.select(params[:data])
	erb aa
end