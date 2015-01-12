$('.expandcollapse').click(function(e) {
    e.preventDefault();
    var list = $(this).parent().next('.expandcollapseposts');
    if (!list.is(':visible')) {
       $(this).text('[-]');
    } else {
       $(this).text('[+]');
    }
    list.toggle();
});
