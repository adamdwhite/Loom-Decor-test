"use strict";

console.log('loom decor js')

// Room checkbox filtering function
var $rooms = $('input[name="roomcheckbox"]');

// $rooms.change(function() {
//     var $checked = $rooms.filter(':checked');
//     console.log($checked.val());
//     console.log("goodbye world");
// });

$rooms.change(function() {
    var $checked = $rooms.filter(':checked');
    if ($checked.val() == 'bathroom') {
        console.log($checked.val());
        $("div.bedroom-content, div.kitchen-content, div.living-room-content, div.study-content").hide();
        // repeat this block for each room, for now...
    } else if ($checked.val() == 'bedroom') {
        console.log($checked.val());
        $("div.bathroom-content, div.kitchen-content, div.living-room-content, div.study-content").hide();
    } else if ($checked.val() == 'kitchen') {
        console.log($checked.val());
        $("div.bathroom-content, div.bedroom-content, div.living-room-content, div.study-content").hide();
    } else if ($checked.val() == 'living') {
        console.log($checked.val());
        $("div.bathroom-content, div.bedroom-content, div.kitchen-content, div.study-content").hide();
    } else if ($checked.val() == 'study') {
        console.log($checked.val());
        $("div.bathroom-content, div.bedroom-content, div.kitchen-content, div.living-room-content").hide();
    }
    // must have a data type in order to use '===' effectively
    else if ($checked.val() === undefined) {
        console.log($checked.val());
        $("div.bathroom-content, div.bedroom-content, div.kitchen-content, div.living-room-content, div.study-content").show();
        //     console.log("ok annie")
    }
});