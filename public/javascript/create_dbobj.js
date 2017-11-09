$(document).ready(function() {
    document.querySelector('.date').valueAsDate = new Date();

    function inuit_db_ins(create_arr, create_tab, create_rider) {
        var courier = JSON.stringify(create_arr);
        var tab = JSON.stringify(create_tab);
        var rider = JSON.stringify(create_rider);
        if ($('select[name="type_courier"]').val() == 'Личный авто') {
            var type_c = "personal_auto";
        } else if ($('select[name="type_courier"]').val() == 'Гранта') { 
            var type_c = "auto_company_granta";
        } else if ($('select[name="type_courier"]').val() == 'Соболь') {
            var type_c = "auto_company_sobol";
        }
        //console.log(courier);
            $.post({
                url: "/create_dbobject",
                data: {"cou": courier, "tab": tab, "rider": rider, "key": type_c},
                success: function(data) {
                    //var data_a = JSON.parse(data)
                    alert(data);
                }
            });
        
    }

    $('.btn').click(function() {
        var name_courier = $('input[name="name_courier"]').val();
        var ind_p = $('select[name="ind_p"]').val();
        var create_date = $('input[name="create_date"]').val();
        var model_tab = $('select[name="model_tab"]').val();
        var sn_tab = $('input[name="sn_tab"]').val();
        var model_rider = $('select[name="model_rider"]').val();
        var sn_reder = $('input[name="sn_rider"]').val();
        var type_courier = $('select[name="type_courier"]').val();
            if(name_courier != '' && sn_tab != '' && type_courier != '') {
                var create_arr = {'name': name_courier, 'company': ind_p,
                                              'date_create': create_date,  'type_courier': type_courier}; 
                var create_tab =  {'manufactured_company': model_tab, 'sn': sn_tab,
                                          'date_create': create_date};
                var create_rider =  {'manufactured_company': model_rider,
                                            'sn': sn_reder, 'date_create': create_date};
                                 
                inuit_db_ins(create_arr, create_tab, create_rider);
                console.log(create_arr);
                
            } else {
                alert('Не заполнены необходимые поля для Курьер на личном авто');
            }
        
        
    });



});