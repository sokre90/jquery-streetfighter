$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		// alert('mouse left');
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		// console.log('mousedown');
		playHadouken();
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// show hadouken and animate it to the right
		// of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '602px');
			}
		);
	})
	.mouseup(function() {
		// console.log('mouseup');
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
	function playCool () {
		$('#cool-sound')[0].volume = 0.5
		// $('#cool-sound')[0].load();
		$('#cool-sound')[0].play();
	}
$(document).keydown(function(e) {
		if(e.keyCode == 88) {
			playCool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
$(document).keyup(function(e) {
		if(e.keyCode == 88) {
			$('#cool-sound')[0].pause();
			$('#cool-sound')[0].load();
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('ryu-ready').hide();
		}
	});