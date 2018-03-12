"use strict";

console.log('loom decor js')

// Room checkbox filtering function
var $rooms = $('input[name="roomcheckbox"]');

$rooms.change(function() {
    var $checked = $rooms.filter(':checked');
    console.log($checked.val());
    console.log("goodbye world");
});

// $rooms.change(function() {
//     var $checked = $rooms.filter(':checked');
//     if ($checked.val() == 'kitchen') {
//         $('div[type="kitchen-content"]').hide;
//         $('.').show;

//     } else if ($checked.val() == 'undefined') {
//         $.show('everything!')
//         console.log("ok annie")
//     }
// });