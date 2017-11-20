class Courier_querydb

    def select(data_a)
        courier_name = data_a['name']
        if(courier_name == 'full' && data_a['date_create'] == '' && data_a['company'] == '' && 
           data_a['type_courier'] == '' && data_a['work'] == 'true')
            query = Courier.select("id, name")
            hash_res = {'key' => 'courier_name', "res" => query}
            return hash_res.to_json
        else
            return 'да да да'
        end    

       
    end 

end    