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
        console.log(user)
        $.post($(this).attr("action"), user, function (response) {
            console.log(response)
        }).done(function () {
            alert("User successfully added")
        })

        return false;
    })
})