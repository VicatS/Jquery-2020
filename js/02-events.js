$(function () {
//    mouseover and mouseout
    let box = $("#box")

    /*box.mouseover(function () {
        $(this).css('background', 'red')
    })
    box.mouseout(function () {
        $(this).css('background', 'green')
    })*/

    function changeRed() {
        $(this).css('background', 'red')
    }
    function changeGreen() {
        $(this).css('background', 'green')
    }
//    Hover
    box.hover(changeRed, changeGreen)

//    Click, Double Click
    box.click(function () {
        $(this).css('background', 'blue')
            .css('color', 'white')
    })
    box.dblclick(function () {
        $(this).css('background', 'purple')
            .css('color', 'white')
    })

//    Focus and blur
    let name = $("#name")

    name.focus(function () {
        $(this).css("border", "2px solid green")
    })
    name.blur(function () {
        $(this).css("border", "1px solid #ccc")
        $("#info").text($(this).val()).show()
    })
})