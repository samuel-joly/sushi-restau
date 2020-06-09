var foodItems = document.querySelectorAll('.food');
var teamItems = document.querySelectorAll('.team');
var interiorItems = document.querySelectorAll('.interior');

var galleryItems = [foodItems, teamItems, interiorItems];
var except = document.querySelectorAll('.specialPhone');


function filter(className) 
{
	for(var i =0; i<galleryItems.length; i++)
	{
		for (var j=0; j<galleryItems[i].length; j++)
		{
			galleryItems[i][j].style.display='none';
						
		}
	}
	
	for(var i =0; i<except.length; i++)
	{
		except[i].style.display='none';
	}
	
	switch (className){
		case "food":
			for (var i =0; i<galleryItems[0].length; i++)
			{
				galleryItems[0][i].style.display='block';
			}
			break;
		case "team":
			for (var i =0; i<galleryItems[1].length; i++)
				{
					galleryItems[1][i].style.display='block';
				}
			break;
			
		case "interior":
			for (var i =0; i<galleryItems[2].length; i++)
			{
				galleryItems[2][i].style.display='block';
			}
			break;
			
		case "all":
			for(var i =0; i<galleryItems.length; i++)
			{
				for (var j=0; j<galleryItems[i].length; j++)
				{
					galleryItems[i][j].style.display='block';
								
				}
			}
			
			for(var i =0; i<except.length; i++)
			{
				except[i].style.display='block';
			}
		}
}