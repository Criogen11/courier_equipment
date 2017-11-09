

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
