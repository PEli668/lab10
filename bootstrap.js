$(document).ready(function() {
    $('.lightbox-trigger').click(function() {
        let imgSrc = $(this).attr('src');
        $('#lightboxImage').attr('src', imgSrc); 
        $('#lightboxModal').modal('show');
    });
});
