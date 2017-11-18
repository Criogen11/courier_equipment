$(document).ready(function() {
    $('.btn_sel_eq').click(function() {
        var aa = $('select[name="type_equipment"]').val();
        if (aa == 'Курьер') {
            $('div.view').css("visibility", "hidden");
            $('.left_menu_courier').css("visibility", "visible");
        } else if (aa == 'Планшет') {
            $('div.view').css("visibility", "hidden");
            $('.left_menu_tab').css("visibility", "visible");
        } else if (aa == 'Ридер') {
            $('div.view').css("visibility", "hidden");
            $('.left_menu_rider').css("visibility", "visible");
        } else if (aa == 'POS принтер') {
            $('div.view').css("visibility", "hidden");
            $('.left_menu_printer').css("visibility", "visible");
        }
    });

    function go_filter(data) {
        var key = data;
        var arr_filter = {
                          "courier": {
                                      
                                     }
                         }
    }

    $('.btn_courier').click(function() {  
        var str_c = 'courier';
        go_filter(str_c);
    });
    $('.btn_tab').click(function() {  
        var str_t = 'tab';
        go_filter(str_t);
    });
    $('.btn_rider').click(function() {  
        var str_r = 'rider';
        go_filter(str_r);
    });
    $('.btn_printer').click(function() {  
        var str_p = 'printer';
        go_filter(str_p);
    });
            
});