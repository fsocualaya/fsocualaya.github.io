jQuery(function(){
    jQuery("#content-nav li").click(function(){
        var index = jQuery(this).index();
        jQuery(".content-tabs").hide().eq(index).fadeIn();
    }); 
});

jQuery(function(){
jQuery('#content-nav a').click(function() {
    jQuery('#content-nav a').removeClass('current_page_item');
    jQuery(this).addClass('current_page_item');
});
});