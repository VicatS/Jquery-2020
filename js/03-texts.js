$(function () {

    reloadLinks()

    $('#add_button')
        .removeAttr('disabled')
        .click(function () {
            $('#menu').prepend('<li><a href="' + $('#add_link').val() + '"></a></li>')
            $('#add_link').val('')
            reloadLinks()
        })

})

function reloadLinks() {
    $('a').each(function (index) {
        let that = $(this)
        let link = that.attr("href")

        that.attr('target', 'blank')

        that.text(link)
    })
}