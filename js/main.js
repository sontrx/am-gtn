// these functions work on all pages!

// scroll to div
function scrollToId () {
    
    var $target;
    var $distance;

    $('.js-scrollToId').on('click', function(e){

        e.preventDefault();
        $target = $(this).attr('js-target');
        $distance = $($target).offset().top;

        $('html, body').animate({
            scrollTop: $distance
        }, 1000);

    })
}

function activeModal () {

    var $target;
    $('.js-activeModal').on('click', function(){

        $target = $(this).attr('js-target');

        $($target).addClass('c-modal--active');
    });

    $('.js-closeModal').on('click', function(){

        $('.c-modal').removeClass('c-modal--active');
    })
}


// Invoke functions after all document are loaded
$(document).ready(function(){

    scrollToId();
    activeModal();

})

// mark current page
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

// show menu
$('.myMenu-right_icon-button').click(function() {
    $(this).parent().toggleClass('show');
    $('.background-overlay_menu').toggle();
});

$('.background-overlay_menu').click(function() {
    $(this).toggle();
    $('.myMenu-right_icon').toggleClass('show');
});

$('.dropdown-item').click(function() {
    $(this).find('.dropdown-submenu, .dropdown-item_icon').toggle();
    $(this).siblings().find('.dropdown-submenu, .dropdown-item_icon:nth-child(2n)').hide();
    $(this).siblings().find('.dropdown-item_icon:nth-child(2n+1)').show();
});

