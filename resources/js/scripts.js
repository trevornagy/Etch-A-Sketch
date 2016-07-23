var $content = $('#content');
var $grid = $('<div id = "grid"></div>');

function gridCreate(userSize)
{
	$content.append($grid);	
	for (var rows = 0; rows < userSize; rows++) 
	{
		var row = '<div id = "row">';

		for (var columns = 0; columns < userSize; columns++) 
		{
			row += '<div  id = "square" class = "square"></div>';	
		}

		row += '</div>';
		$grid.append(row);		
	}
}

var getDimensions = $('#OptionsSubmit').on('click', function()
{

	var dimensions = $('#dimensions').val();

	if (checkExistingGrid() == true)
	{
		for (var i = 0 ; i < $('.square').length; i++) 
		{
		$('.square').remove();
		}
		checkDimensions(dimensions);
	}
	else
	{
		checkDimensions(dimensions);
	}

	// Makes it so page doesn't refresh
	return false;	
});	

function checkExistingGrid()
{
	if ($('#square').hasClass('square'))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checkDimensions(dimensions)
{
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

$(document).ready(function(){

	// gridCreate();

}); 

 