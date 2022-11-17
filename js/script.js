
$( "#playstoreid" ).on( "click", function() {
  window.location = 'https://play.google.com/store/apps/details?id=app.tymap';
    });

$( "#appstoreid" ).on( "click", function() {
window.location = 'https://apps.apple.com/es/app/tymap/id1523210939';
});
        
$('#playstoreid').hover(function() {
    $(this).css('cursor','pointer');
});
        
$('#appstoreid').hover(function() {
    $(this).css('cursor','pointer');
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'es'},
        'google_translate_element'
    );
}
        
$('#main_contact_form').submit(function(event) {

    $.ajax({
    type: "POST",
    url: "http://tymap.app/send.php",
    dataType: 'json',
    crossDomain: true,
    data: $('#main_contact_form').serialize(),
    success: function (jsonResult) {
    swal("Success!", "Your form is submitted", "success", {
    button: "OK",
    });

    $('#main_contact_form').find("input[type=text], textarea").val("");

    $('#main_contact_form').find("input[type=email], textarea").val("");
    },
    error: function (jqXHR, textStatus) {
        swal("Success!", "Your form is submitted", "success", {
    button: "OK",
    });

    }
    })
})

var user = $(".faq-down");
user.on("mouseenter", function() {
	$(".dropdown-menu").first().stop(true, true).delay(150).slideDown(300, 'easeInOutQuad');
});
$(".dropdown-menu").on("mouseleave", function() {
	$(".dropdown-menu").first().stop(true, true).delay(150).slideUp(150, 'easeInOutQuad');
});

user.on("mouseleave", function() {
	$(".dropdown-menu").first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
});
$(".dropdown-menu").on("mouseenter", function() {
	$(".dropdown-menu").first().stop(true, true).delay(150).slideDown(300, 'easeInOutQuad');
});




