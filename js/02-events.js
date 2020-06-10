$(function () {
//    mouseover and mouseout
    let box = $("#box")

    box.mouseover(function () {
        $(this).css('background', 'red')
    })
    box.mouseout(function () {
        $(this).css('background', 'green')
    })
})