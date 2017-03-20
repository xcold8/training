/*

jQuery event handling syntax:

$('[selector]').[event]([action])

Examples:

$('#btn_login').click(function(){
	alert("BUTTON CLICKED") 
});

$('body').mousemove(function(){
	console.log('mouse is moving...');
});

*/


/*		selector			 event    action   */
$('#main .top_buttons .btn').click(function(){

	// if already active, ignore click
	if ( $(this).hasClass('active') ) {
		return;
	}

	if ($(this).hasClass('login')) {
		show_login();
	}
	else {
		show_signup();
	}

});

$(document).ready(function(){
	// default
	show_login();
});


function show_login(){
	$('#main .top_buttons .btn.signup').removeClass('active');
	$('#signup_cont').removeClass('active');
	$('#main .top_buttons .btn.login').addClass('active');
	$('#login_cont').addClass('active');
};

function show_signup(){
	$('#main .top_buttons .btn.signup').addClass('active');
	$('#signup_cont').addClass('active');
	$('#main .top_buttons .btn.login').removeClass('active');
	$('#login_cont').removeClass('active');
};