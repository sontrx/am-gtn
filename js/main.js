// speaker slider
$('#speaker-slider').RSwiper({
	direction:'horizontal', //'horizontal' or 'vertical' default : 'horizontal',
	speed:3000, //duration of move to next page, millisecond (ms),default : 3000ms.
	isPagination:true, //show the pagination or not.
	isArrows:false,//show the arrow controller or not,
	}); 
// kols network slider
$(document).ready(function() {
    $('#kols-slider').carousel({
        num: 3,
        maxWidth: $('.kols__container').width()*0.5,
        maxHeight: $('.kols__container').width()*0.63,
        autoPlay: true,
        showTime: 3000,
        animationTime: 1000,
        scale: 0.8,
        distance: $('.kols__container').width()*0.2,
    });
});
