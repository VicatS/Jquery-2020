$(function () {
//    Load
// $("#data").load("https://reqres.in/")

// GET and POST
    $.get("https://reqres.in/api/users", {page: 2}, function (response) {
        response.data.forEach((element, index) => {
            $("#data").append("<p>" + element.first_name + " " + element.last_name + "</p>")
        })
    })

    $("#form").submit(function (e) {
        e.preventDefault()
        let user = {
            "name": $('input[name="name"]').val(),
            "web": $('input[name="web"]').val()
        }

        /*$.post($(this).attr("action"), user, function (response) {
            console.log(response)
        }).done(function () {
            alert("User successfully added")
        })*/

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            beforeSend: function() {
                console.log("Sending user")
            },
            success: function (response) {
                console.log(response)
            },
            error: function () {
                console.log("An error has occurred")
            },
            timeout: 2000
        })
        return false;
    })
})