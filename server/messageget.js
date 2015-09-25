$(document).ready(
    function(){
        
    $("#submit").click(function(){
        $.getJSON("messages.txt", function(obj){
            $.each(obj, function(key, value){
				$("localhost3000/index.html").append("<li>" + value.message + "</li>")
			});
        });
    });
});




// $.get("localhost:3000/index.html", function(data){
//     $(".result").html(data);
// });





// $(document).ready(
//     function(){

// $(function(){
//     $('#submit').click(function(){
//         $.getJSON('messages.txt', function(data){
//             var item = [];
//             $.each(data, function(key, val){
//                 item.push('<li id="' + key + '">' + val + '</li>');
//             });
//             $('<ul/>', {
//                 'class': item.join('')
//             }).appendTo('body');
//         });
//     });
// });
// });




// $('#submit').click(function(){
//     var message = $.post['message'];
//     $.post('localhost:3000/index.html', {message: $('#message').val()
//         }, 
//         function(data){
//             $('#message').val(data);
//     });
// });

