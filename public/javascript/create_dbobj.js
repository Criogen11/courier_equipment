$(document).ready(function() {
    document.querySelector('.date').valueAsDate = new Date();

    function view_add(data) {   //   Выводим список неиспользуемого оборудования
        var data_t = data[0];
        var data_r = data[1];
        var str = "";
        for(var i = 0; i < data_t.length; i++) {
            str += "<option>" + "(" + data_t[i].id + ")" + " " + data_t[i].manufactured_company + 
            "&nbsp&nbsp&nbsp&nbsp" + data_t[i].sn + "</option>";        
        }
        $('.inp_add_tab').html(str);
        str = "";
        for(var i = 0; i < data_r.length; i++) {
            str += "<option>" + "(" + data_r[i].id + ")" + " " + data_r[i].manufactured_company + 
            "&nbsp&nbsp&nbsp&nbsp" + data_r[i].sn + "</option>";        
        }
        $('.inp_add_rider').html(str);
    }

    function add_tab_and_rider() {   //  Добавляем выбор неиспользуемых планшетов и ридеров
        $.post({
            url: "/add_rab_rider",
            data: {"cou": "courier", "tab": "tab", "rider": "rider", "key": "type_c"},
            success: function(data) {
                var tada_obj = JSON.parse(data)
                view_add(tada_obj)
            }
        });
    }

    add_tab_and_rider();

    function inuit_db_ins(create_arr, create_tab, create_rider) {   //  Запись в базу нового курьера
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
            $.post({
                url: "/create_dbobject",
                data: {"cou": courier, "tab": tab, "rider": rider, "key": type_c},
                success: function(data) {
                    alert(data);
                    //console.log(data);
                }
            });    
    }

    $('.btn').click(function() {                    // Собирает инфо для POST
        var name_courier = $('input[name="name_courier"]').val();
        var ind_p = $('select[name="ind_p"]').val();
        var create_date = $('input[name="create_date"]').val();
        var model_tab = $('select[name="model_tab"]').val();
        var sn_tab = $('input[name="sn_tab"]').val();
        var model_rider = $('select[name="model_rider"]').val();
        var sn_reder = $('input[name="sn_rider"]').val();
        var type_courier = $('select[name="type_courier"]').val();
            if(name_courier != '') {
                if ($("#add_tab").prop('checked')) {
                     
                    var create_tab = {"tab": $('select[name="choice_tab"]').val()}
                } else {
                    if (model_tab != '' && sn_tab != '') {
                        var create_tab =  {'manufactured_company': model_tab, 'sn': sn_tab,
                                           'date_create': create_date};
                    } else {
                        alert('Заполните информацию о плашете!');
                    }
                }
                if ($("#add_tab").prop('checked')) {
                    var create_rider = {"rider": $('select[name="choice_rider"]').val()}
                } else {
                    if (type_courier == 'Личный авто') {
                        if (model_rider != '' && sn_reder != '') {
                            var create_rider =  {'manufactured_company': model_rider,
                                                 'sn': sn_reder, 'date_create': create_date};
                        } else {
                            alert('Заполните информацию о ридере!');
                        } 
                    } else {
                        var create_rider = 'nill';
                    }                    
                } 
                var create_arr = {'name': name_courier, 'company': ind_p,
                                  'date_create': create_date,  'type_courier': type_courier}; 
                if (create_arr != '' && create_tab != '') {                 
                    inuit_db_ins(create_arr, create_tab, create_rider);
                    console.log(create_tab);
                }   
            } else {
                alert('Не заполнены необходимые поля');
            }       
    });



});