var $content = $('#content');
var $grid = $('<div id = "grid"></div>');

function gridCreate(userSize)
{
	if ($grid.hasClass('onPage'))
	{
		$grid.remove();	
	}
	else
	{
		$content.append($grid);	
		$grid.addClass('onPage');

		for (var rows = 0; rows < userSize; rows++) 
		{
			var row = '<div>';

			for (var columns = 0; columns < userSize; columns++) 
			{
				row += '<div class = "square"></div>';	
			}

			row += '</div>';
			$grid.append(row);		
		}
	}
}

var getDimensions = $('#OptionsSubmit').on('click', function()
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
	// Makes it so page doesn't refresh
	return false;	
});	

$(document).ready(function(){

	// gridCreate();

}); 

 