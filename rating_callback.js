jQuery(document).ready(function($) {
	


$('html').on('click', '.ul-reiting li button', function(event) {




	// if ( $(this).parent('li').parent('.ul-reiting').data('reiting') == 'NaN' ) {
		
		// console.log('does not have active');



// -----------------------------------------------------------------------------------------


		var user_id_value = $(this).parents('article').data('user-id');
		var rating_value = $(this).data('reiting');


		console.log(user_id_value);
		console.log(rating_value);


		var ajaxurl = IfaAjax.ajaxurl;
		var data = {
			'action': 'rating_callback',
			data : 'rating_value=' + rating_value + '&user_id=' + user_id_value
		};

		jQuery.post(ajaxurl, data,'json');
		jQuery(document).ajaxSuccess(function(){
			console.log('sent ok');
		});
		jQuery(document).ajaxError(function(){
			console.log('sent-failure');
		});

// ---------------------------------------------------------------------------------------------







	// }
});




});