class Courier_querydb

    def select(data_a)
        as = data_a['name']
        ass = Courier.where("name = ?", as)
        ass_id = ass[0]['id']
        aa = Planshet.where("courier_id = ?", ass_id)
        data_ret = {'courier' => ass[0], 'rider' => aa[0]}
        return data_ret.to_json
    end

end    