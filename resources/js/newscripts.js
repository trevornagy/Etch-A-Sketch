$('#OptionsSubmit').on('click', function()
{
	gridCheck();
	return false;
});

// Check page for existing page
function gridCheck()
{
	if ($('#content').hasClass('onPage'))
	{
		$('#content').remove();
	}

	gridVerify();
}


// Verify that the values inputted are within the range that we allow
function gridVerify()
{
	var dimensions = $('#dimensions').val();

	if (dimensions <= 1)
	{
		dimensions = 2;
		gridCreate(dimensions);	
	}
	else if (dimensions > 100)
	{
		alert("Sorry! You must insert a dimension that is less than 100!");
	}
	else
	{
		gridCreate(dimensions);
	}	
}

// Create grid 
function gridCreate(dimensions)
{
	var $content = $('<div id = "content" class="onPage"></div>');
	$('body').append($content);

	for (var rows = 0; rows < dimensions; rows++) 
	{
		var row = '<div id = "row">';

		for (var columns = 0; columns < dimensions; columns++) 
		{
			row += '<div  id = "square" class = "square"></div>';	
		}

		row += '</div>';
		$content.append(row);		
	}
}

$('.square').mouseenter(function() 
{
	$('.square').css('background', 'red');	
});
