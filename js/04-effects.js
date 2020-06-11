$(function () {
    let box = $('#box')
    $('#show').hide()

    $('#show').click(function () {
        $(this).hide()
        $('#hidden').show()
        box.slideDown('slow')
    })

    $('#hidden').click(function () {
        $(this).hide()
        $('#show').show()
        box.slideUp('slow', function () {
            console.log("Cartel ocultado")
        })
    })

    $('#allInOne').click(function () {
        box.slideToggle('fast')
    })

    $('#putMeUp').click(function () {
        box.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '100px'
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, "slow")
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, "slow")
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, "slow")
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '100px'
            }, 'slow')
    })
})