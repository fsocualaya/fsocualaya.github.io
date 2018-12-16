jQuery(function(){
    jQuery("#content-nav li").click(function(){
        var index = jQuery(this).index();
        jQuery(".content-tabs").hide().eq(index).fadeIn();
    }); 
});
