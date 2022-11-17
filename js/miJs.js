$('#sendForm').submit(function(event)
{   
    event.preventDefault();
    var $form = $(this);     
    $.ajax
    ({
        type: 'POST',
        url: $form.attr('action'),
        data: {"email": $("#email").val(), "name": $("#name").val() + " " + $("#name2").val(), "number": $("#number").val(), "message": $("#message").val()}                
    }).done(function(info)
    {
        location.href = "index.html";        
    });
});