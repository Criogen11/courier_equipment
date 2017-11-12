

class Apply_db 

    def initialize(cou, tab, rider, key)
        @data_courier = cou
        @data_tab = tab
        @data_rider = rider
        @type_courier = key
        
    end
    def test 
        data_t = JSON.parse(@data_tab)
        if (data_t['tab'])
            data_aa = data_t['tab'].split
            data_ab = data_aa[0].delete "()"
            data_ad = Planshet.find_by("id=?", data_ab)
            data_ad.update(courier_id: 222, work: true)
            return data_ad.to_json 
        else
            return "Ошибонька!"
        end        
    end    
    def insert_db   #   Создание нового курьера
        data = JSON.parse(@data_courier)
        data_t = JSON.parse(@data_tab)
        data_r = JSON.parse(@data_rider)
        data['work'], data_t['work'], data_r['work'] = true, true, true
        if (@type_courier == 'personal_auto')
            if (data_a = Courier.create(data))
                if (data_t['tab'])
                    data_aa = data_t['tab'].split
                    data_ab = data_aa[0].delete "()"
                    data_ad = Planshet.find_by("id=?", data_ab)
                    if (data_ad.update(courier_id: data_a[:id], work: true))
                        if(data_r['rider'])
                            data_ba = data_r['rider'].split
                            data_bb = data_ba[0].delete "()"
                            data_bc = Rider.find_by("id = ?", data_bb)
                            if (data_bc.update(courier_id: data_a[:id], work: true))
                                return "Запись удалась!"
                            else
                                return "Запись не удалась! Обратитесь к системному администратору."
                            end    
                        else
                            
                        end    
                    else
                        return "Запись не удалась!"
                    end    
                else
                    data_t['courier_id'], data_r['courier_id'] = data_a[:id], data_a[:id]
                    if ((win_t = Planshet.create(data_t)) && (win_r = Rider.create(data_r)))
                        return "Запись удалась!"
                    end
                end    
            else
                return 'Запись не удалась!'
            end
        elsif (@type_courier == 'auto_company_granta' || @type_courier == 'auto_company_sobol')  
            if (data_a = Courier.create(data))
                if (data_t['tab'])
                    data_aa = data_t['tab'].split
                    data_ab = data_aa[0].delete "()"
                    data_ad = Planshet.find_by("id=?", data_ab)
                    data_ad.update(courier_id: data_a[:id], work: true)
                    return "Запись удалась!"
                else    
                    data_t['courier_id'] = data_a[:id]
                    if (win_t = Planshet.create(data_t))
                        return "Запись удалась!"
                    end
                end    
            else
                return 'Запись не удалась!'
            end   
            
        end    
    end
    def off_ecuipment
        data_t = Planshet.where("work = ?", false)
        data_r = Rider.where("work = ?", false)
        data = {0 => data_t, 1 => data_r}
        return data = data.to_json
    end    
 
end     