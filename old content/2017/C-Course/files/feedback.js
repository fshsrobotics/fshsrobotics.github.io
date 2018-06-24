if (wikispaces_isUserLoggedIn) {
	$('#feedback-week5').append('<div style="border:3px solid var(--main-blue);padding:10px;text-align:center">How challenging did you find the above problems?<br/><br/>' +
		'<div class="c-course-header" style="margin:0">' + 
		' <a class="feedback-link" style="cursor:pointer" data-level="1">1 (really hard)</a>' +
		' <a class="feedback-link" style="cursor:pointer" data-level="2">2</a>' +
		' <a class="feedback-link" style="cursor:pointer" data-level="3">3</a>' +
		' <a class="feedback-link" style="cursor:pointer" data-level="4">4</a>' +
		' <a class="feedback-link" style="cursor:pointer" data-level="5">5 (really easy)</a>' +
		'</div>'
		);

	$('body').on('click', '.feedback-link', function() {
		$.ajax({
				url: "https://ptb.discordapp.com/api/webhooks/375610890554441729/Q7u5wvURzn_m40NV3WUZRy9QioqIZDhNUp7M7WGssQWRcyT5MCv5UX6BwUBIYC3ZZAmn",
				type: "POST",
				data: JSON.stringify({
					embeds: [{
						color: 0x4060fa,
						fields: [{
							name: "Difficulty of Week 5 problems", 
							value: $(this).attr('data-level') + " from " + wikispaces_username
						}],
						timestamp: new Date()
					}]
				}),
				dataType: "text"
		}).done(function(d) {
			$('#feedback-week5').replaceWith('<div style="border:3px solid var(--main-blue);padding:10px;text-align:center">Thanks for the feedback!</div>');
		});
	});
}