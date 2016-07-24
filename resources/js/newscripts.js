$('#OptionsSubmit').on('click', function()
{
	gridCheck();
});

// Check page for existing grid
function gridCheck()
{
	if ($('#content').hasClass('onPage'))
	{
		$('#content').remove();
	}

	gridVerify();
}


// Verify that the user input is within the range that we allow
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


// Check if mouse has entered the square
$('body').on('mouseenter', 'div .square', function()
{
	// Get colour value from select box
	if ($('select[name=colSelection]').val() == 'black')
	{
		$(this).css('background-color', '#000000');
	}
	else if ($('select[name=colSelection]').val() == 'red')
	{
		$(this).css('background-color', '#ff0000');
	}
	else if ($('select[name=colSelection]').val() == 'blue')
	{
		$(this).css('background-color', '#0000FF');
	}
	else 
	{
		/* Random color generator thanks to Stackoverflow
		   http://stackoverflow.com/a/5365036            */
		$(this).css('background-color', "#"+((1<<24)*Math.random()|0).toString(16));
	}
});

// Reset grid back to white
$('#OptionsReset').on('click', function()
{
	$('div .square').css('background-color', '#FFFFFF');
});
