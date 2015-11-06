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
	
	$('.ryu').keydown(function(e) {
		if(e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	$('.ryu').keyup(function(e) {
		if(e.keyCode == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	});

});

	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}