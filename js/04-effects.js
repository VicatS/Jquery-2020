$(function () {
    $('#show').hide()

    $('#show').click(function () {
        $(this).hide()
        $('#hidden').show()
        $('#box').slideDown('slow',1)
    })

    $('#hidden').click(function () {
        $(this).hide()
        $('#show').show()
        $('#box').slideUp('slow',0)
    })

    $('#allInOne').click(function () {
        $('#box').slideToggle('fast')
    })
})