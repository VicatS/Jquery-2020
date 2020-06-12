$(function () {
//    Load
// $("#data").load("https://reqres.in/")

// GET and POST
    $.get("https://reqres.in/api/users", {page: 2}, function (response) {
        console.log(response)
        response.data.forEach((element, index) => {
            $("#data").append("<p>" + element.first_name + " " + element.last_name + "</p>")
        })
    })
})