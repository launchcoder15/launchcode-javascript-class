// wrap input in <form> and attach a submit event handler
// insert submitted item into list
$(document).ready( function() {
	$('#todo_form').submit(function( event)	{

		// cancel form action
		event.preventDefault();

		var value = $( "#submit" ).val();
		$('#submit').val('');
		
		// make separate variable for each glyphicon
		var checked = "<span id='glyphiconCheck' class='glyphicon glyphicon-ok-circle' aria-hidden='true' style = 'color:#339933'></span>";
		var deleted = "<span id='glyphiconDelete' class='glyphicon glyphicon-remove-circle' aria-hidden='true' style = 'color:#FF4747'></span>";
		
		// put glyphicons variables into li variable
		$('.list').append("<li>" + value + checked + deleted + "</li>");

		//var newItem = $('.list').append("<li>" + value + "<span id='glyphiconDelete' class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span>" + "<span id='glyphiconCheck' class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + "</li>");
		// move item to completed list when check mark is clicked
		$('li').on('click', '#glyphiconCheck', function() {

			// remove item from list
			$(this).parent().remove();
			
			// move item to completed list
			$('.complete').append($(this).parent());
			
			// remove check mark glyphicon
			$(this).remove();
			
			// remove item from completed list when remove is clicked
			$('li').on('click', '#glyphiconDelete', function() {
				$(this).parent().remove();
			});	
		});

		// add click handler to delete glyphicon
		$('li').on('click', '#glyphiconDelete', function() {
			$(this).parent().remove();
		});
	});
	
	// remove items when check mark is clicked; .on( events [, selector ] [, data ], handler )
    /*$('ul').on('click', 'li', function() {
        $(this).remove();
        // move item to completed list
        $('.complete').append(this);
        
        //var value = $( '.list' ).val();
        //var completedItem = $('.complete').append("<li>" + value + "</li>");
    	//event.stopPropagation();
    });*/
});


// ability to select day, date, and time

// ability to adjust priority
