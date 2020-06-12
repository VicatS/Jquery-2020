$(function () {
    let element = $('.element')
// Move item on page
    element.draggable()

// Resize
    element.resizable()

//    Selectable element
//     $('.selectable-list').selectable()

//    Sortable
    $('.selectable-list').sortable({
        update: function (event, ui) {
            console.log('Has changed the list')
        }
    })

//    Drop
    $('#moved-item').draggable()
    $('#area').droppable({
        drop: function () {
            console.log("Have you dropped something into the area")
        }
    })
})