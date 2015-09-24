// $.get("localhost:3000/index.html", function(data){
//     $(".result").html(data);
// });

$('#message').keyup(function(){
    var message = $('#message').val();
    $.post('localhost:3000/index.html', {message: message}, function(data){
        
    });
});

