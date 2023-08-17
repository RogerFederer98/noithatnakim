// ANCHOR LINK
function anchorLink(el) {
    var p = $(el).offset();
    var navHeight = $('#gnavi').outerHeight();
    var headerHeight = $('#header').outerHeight();
    if ($(window).width() > 750) {
        $('html,body').animate({ scrollTop: p.top - navHeight }, 400);
    } else {
        $('html,body').animate({ scrollTop: p.top - headerHeight }, 400);
    }
}

// anchor in page
$(window).bind('load',function(){
    "use strict";
    $(function(){
        $('a[href^="#"]').click(function(){
            if ($($(this).attr('href') ).length ) {
                var p = $( $(this).attr('href') ).offset();
                if($(window).width() > 640){
                    $('html,body').animate({ scrollTop: p.top - 140}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
            }
            return false;
        });
    });
});

// anchor top page #
$(window).bind('load',function(){
    "use strict";
 var hash = location.hash;
 if(hash){
      var p1 = $(hash).offset();
    if($(window).width() > 640){
                    $('html,body').animate({ scrollTop: p1.top - 140}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p1.top - 80}, 400);
                }
    }

});




// =========== END - ANCHOR LINK ============

//BACK TO TOP
$(document).ready(function() {
    "use strict";
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
});

$(window).bind('load scroll', function() {
    "use strict";
    if($(this).scrollTop() >= 500) {
        $('.to-top,#box_contact_sp').addClass('show');
    } else {
        $('.to-top, #box_contact_sp').removeClass('show');
    }
});
