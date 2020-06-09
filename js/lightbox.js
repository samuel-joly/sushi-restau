var images = document.querySelectorAll('.lightbox-item');

for (var i=0; i< images.length; i++)
    {
        images[i].addEventListener('click', function(e) 
        {
            e.preventDefault();
            var fullImg='';
            for (var j=0; j<this.src.lastIndexOf('.jpg'); j++)
            {
                fullImg+= this.src[j]
            }
            fullImg += 'FULL.jpg';        
        
            var lightbox = $('#lightbox');
            if(lightbox.length != 0)
            {
                document.querySelector('#lightbox #content img').src = fullImg;
                lightbox.show();
            }
            
            else
            {
                $('body').append('<div id="lightbox">'+'<div id="content">'+'<div id="closeButton"></div>'+'<img src="'+fullImg+'"/>'+'</div>'+'</div>');
                $('#lightbox').show();
                
                $('#lightbox').click(function() {
                    $('#lightbox').hide();
                })
            }
        })
        
    }
