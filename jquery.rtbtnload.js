(function ($) {
    $.rtbtnload = {
        s : {
                message:"Loading..",
                elem:false,
                loader:false,
                loader_w : 20,
                disableDone:function(){},
                enableDone:function(){}
            },
        disableButton: function(o)
        {
            var o = $.extend({}, this.s, o);
            if(o.loader != false)
            {
                o.loader = '<img src="'+o.loader+'" width="'+o.loader_w+'" />';
            }
            var id = $(o.elem).attr("id");
            var class_es = $(o.elem).attr("class");
            var thistag = $(o.elem).clone();
            $(o.elem).hide();
            if ($(o.elem).is( "input")) 
            {
                var button = $("<button></button>");
                $(button).attr("class",class_es).attr("disabled","disabled").attr("id",id+"_dummybtn").html(o.loader+o.message);
                $(o.elem).after(button);
            }
            else
            {
                $(thistag).removeAttr("id").attr("disabled","disabled").attr("id",id+"_dummybtn").html(o.loader+o.message);
                $(o.elem).after(thistag);
            }
            (o.disableDone).call();
        },

        enableButton: function (o)
        {
            var o = $.extend({}, this.s, o);
            var id = $(o.elem).attr("id");
            $(o.elem).removeAttr("disabled").show();
            $("#"+id+"_dummybtn").remove();
            (o.enableDone).call();
        }

   };
}(jQuery));