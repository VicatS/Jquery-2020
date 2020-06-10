$(function () {
//    ID Selectors
    let red = $("#red").css("background", "red")
        .css("color", "white")
    $("#yellow").css("background", "yellow")
        .css("color", "green")
    $("#green").css("background", "green")
        .css("color", "white")

//    Class Selectors
    let my_class = $(".zebra").css("padding", "5px")

    $('.no_border').click(function () {
        $(this).addClass('zebra')
    })

//    Label Selectors
    let paragraph = $('p').css('cursor', 'pointer')

    paragraph.click(function () {
        let that = $(this)
        if (!that.hasClass('big')) {
            that.addClass('big')
        }else{
            that.removeClass('big')
        }
    })

//    Attribute selectors

    $('[title="Google"]').css('background', '#ccc')
    $('[title="Facebook"]').css('background', 'blue')
})