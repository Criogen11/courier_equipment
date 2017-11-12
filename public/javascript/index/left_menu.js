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

    
});