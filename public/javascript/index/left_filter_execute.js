$(document).ready(function() {

    function select_db(data) {
        $.post({
            url: '/index_select_db',
            data: {"data": data},
            success: function(res) {
                arr = JSON.parse(res)
                if (arr['key'] == 'courier_name') {
                    $('.post_finish').html('');
                    var str = '';
                    for (var i = 0; i < arr['res'].length; i++) {
                        str += "<div attr=\"" + arr['res'][i]['id'] + "\" class=\"courier_a\"><p class=\"courier_name_a\">" 
                        str += arr['res'][i]['name'] 
                        str += "</p></div>"
                    }
                    $('.post_finish').html(str);
                }
                console.log(arr);
            } 
        });
    }

    $('.btn_courier').click(function() {

        if($('input[name="courier_name"]').val() != '') {
            var name = $('input[name="courier_name"]').val();
        } else {
            var name = 'full';
        }
        var date_create = $('input[name="courier_date"]').val();
        var company = $('select[name="courier_company"]').val();
        var type_courier = $('select[name="courier_type"]').val();
        if ($('input[name="courier_work"]').prop('checked')) {
            var work = false;    
        } else {
            var work = true;
        }
        var key = 'courier';
        var arr = {key, name, date_create, company, type_courier, work};
        select_db(arr);
        console.log(arr);
    });

});