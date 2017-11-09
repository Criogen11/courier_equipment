

class Apply_db 

    def initialize(cou, tab, rider, key)
        @data_courier = cou
        @data_tab = tab
        @data_rider = rider
        @type_courier = key
    end
    def test 
        aaa =  @data_tab
        return aaa
    end    
    def insert_db   #   Создание нового курьера
        data = JSON.parse(@data_courier)
        data_t = JSON.parse(@data_tab)
        data_r = JSON.parse(@data_rider)
        data['work'], data_t['work'], data_r['work'] = true, true, true
        if (@type_courier == 'personal_auto')
        if (data_a = Courier.create(data))
            data_t['courier_id'], data_r['courier_id'] = data_a[:id], data_a[:id]
            if ((win_t = Planshet.create(data_t)) && (win_r = Rider.create(data_r)))
                return "Запись удалась!"
            end
        else
            return 'Запись не удалась!'
        end
        elsif (@type_courier == 'auto_company_granta' || @type_courier == 'auto_company_sobol')  
            if (data_a = Courier.create(data))
                data_t['courier_id'] = data_a[:id]
                if (win_t = Planshet.create(data_t))
                    return "Запись удалась!"
                end
            else
                return 'Запись не удалась!'
            end   
            
        end    
    end    
 
end     