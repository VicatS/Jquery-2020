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

//    mousedown and mouseup
    let info = $("#info")
    info.mousedown(function () {
        $(this).css("border-color", "gray")
    })
    info.mouseup(function () {
        $(this).css("border-color", "black")
    })

//    mousemove
    $(document).mousemove(function () {
/*        console.log("En X:" + event.clientX)
        console.log("En Y:" + event.clientY)*/
        /*let followMe = $("#followMe")
        followMe.css("left", event.clientX)
        followMe.css("top", event.clientY)*/
        $('body').css("cursor", "none")
        $("#followMe").css("left", event.clientX)
            .css("top", event.clientY)
    })
})