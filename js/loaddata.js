/**
 * Created by Gao  Zhiluo on 24/03/2015.
 */
$(document).ready( function() {
    $.getJSON( "lowes.json", function( data ) {
        var items = [];
        var output = [];
        $.each( data, function( key, val ) {
           console.log(key+ +val);
        });
});
});