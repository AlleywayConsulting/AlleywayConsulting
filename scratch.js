jQuery(document).ready(function ($) {

    $("#download_bha").on("click", function () {

        var name = $("input#name").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();

        $.ajax({
            url: "//formspree.io/info@openbiolabs.org",
            type: "POST",
            data: {
                name: name,
                phone: phone,
                email: email
            },
            dataType: "json",
            cache: false,
            success: function () {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your details have been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function () {
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                $('#success > .alert-danger').append('</div>');
            }
        })
    });
});