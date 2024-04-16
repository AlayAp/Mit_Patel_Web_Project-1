// $(document).ready(function() {
//     $('img').on('load', function() {
//         $(this).data('height', this.height);
//     }).on('mouseenter mouseleave', function(e) {
//         $(this).stop().animate({
//             height: $(this).data('height') * (e.type === 'mouseenter' ? 1.5 : 1)
//         });
//     });
// });


$(document).ready(function() {
    $('img').hover(
        function() {
            console.log("isdkjasksadkdjasdjashjkdhashdkasjkdjaksjkdasjkdjkasjkd")
            $(this).css('transform', 'scale(2)');
        },
        function() {
            console.log("isdkjasksadkdjasdjashjkdhashdkasjkdjaksjkdasjkdjkasjkd")

            $(this).css('transform', 'scale(1)');
        }
    );
});