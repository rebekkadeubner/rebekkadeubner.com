// Page Load Overlay


$(document).ready(function() {
  $('.overlay').delay(300).fadeOut('200');
});



// Espace ---------------------------------------



// Click on text to show more:

$(document).ready(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
  })
});




// Click on image to enlarge them, and display background overlay

$(document).ready(function() {
  $(".small").click(function() {
    $(this).toggleClass("large");
    $(".background").toggleClass("show");
  })
});


















// Projects  ---------------------------------------


// Hide description box:

$(document).ready(function() {
  $(".close").click(function() {
    $("#draggable").addClass("hidden");
  })
});

$(document).ready(function() {
  $(".reduce").click(function() {
    $(".content").toggleClass("hidden");
  })
});


// When click on view, go next:

$(document).ready(function() {
  $(".view").click(function() {
    $(this).addClass("hidden");
  })
});

// Draggable info box:

var selected = null, 
    x_pos = 0, y_pos = 0,
    x_elem = 0, y_elem = 0;

function _drag_init(elem) {
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

function _destroy() {
    selected = null;
}

document.getElementById('draggable').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;











