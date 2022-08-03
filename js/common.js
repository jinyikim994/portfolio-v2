// All Menu
document.querySelector('.all-menu-btn').onclick = function (e) {
	var menu = document.querySelector('.all-menu');
	var btn = document.querySelector('.all-menu-btn');

	menu.classList.toggle('is-active');
	btn.classList.toggle('is-active');

	e.preventDefault();
}

// Tab Menu
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

