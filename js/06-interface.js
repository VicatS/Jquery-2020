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

//    Effects
    $('#show').click(function () {
        // $('.box-effects').fadeToggle()
        // $('.box-effects').effect("explode")
        // $('.box-effects').toggle("blind")
        // $('.box-effects').toggle("slide")
        // $('.box-effects').toggle("drop")
        // $('.box-effects').toggle("fold")
        // $('.box-effects').toggle("puff")
        $('.box-effects').toggle("shake", 'slow')
    })

//    Tooltip
    $(document).tooltip()

//    Dialog
    $("#throw-popup").on("click",function () {
        $("#popup").dialog()
    })

// Datepicker
    $("#calendar").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        showOtherMonths: true,
        buttonImageOnly: true,
        dayNamesMin: [
            "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"
        ],
        dayNames: [
            "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sábado","Domingo"
        ]
    })
})