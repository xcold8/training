$('#main .tasks_wording .before').click(function(){
	if ( $(this).hasClass('before') ) {
			make_After();
		}
	if ($this).hasClass('after'){
		make_Before();
	}

function make_After(){
	$('#main .tasks_wording .before').removeClass('before').addClass('after');
};
function make_Before(){
	$('#main .tasks_wording').removeClass('after').addClass('before');
};