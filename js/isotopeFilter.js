var $container = $('#container').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 320,
    gutter: 20
  }
});


$('.galleryFilter').on( 'click', 'p', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});