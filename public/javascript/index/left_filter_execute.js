$(document).ready(function() {

    function select_db(data) {
        var data_json = JSON.stringify(data);
        $.post({
            url: '/index_select_db',
            data: {"data": data},
            success: function(res) {
                arr = JSON.parse(res)
                console.log(arr);
            } 
        });
    }

    $('.btn_courier').click(function() {

        var name = $('input[name="courier_name"]').val();
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