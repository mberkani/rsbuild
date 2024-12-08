//
// Side nav initialization //
//
document.addEventListener('DOMContentLoaded', function() {
    let options ={
        "draggable": false,
        "inDuration": 500,
    }
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

//
// parallax
//

document.addEventListener('DOMContentLoaded', function() {
  let options ={
    "responsiveThreshold":0
  }
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});
  //
  // Initialization du panier rapide
  // situé dans layout
  //
  document.addEventListener('DOMContentLoaded', function() {
    //bottom-sheet
    //modal-fixed-footer
    let options ={
      "opacity": 0.6,
      "inDuration": 500,
      "outDuration": 20
    }
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  //
  // initialisation du dropdown du header sidenav
  //

  document.addEventListener('DOMContentLoaded', function() {
    let options ={

    }
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });


  //
  // Initialisation du collapsible header
  //
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

  //
  // Initialisation des caroussel:
  //

  document.addEventListener('DOMContentLoaded', function() {
     options ={
      "fullWidth": true,
      "indicators": true,
      "duration": 350,
      "padding":5,
      "height":100
    }
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  //
  // Image galery view:
  //
  
  document.addEventListener('DOMContentLoaded', function() {
    var options ={}
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });
  
 //
 // product detail slider:
 //
 document.addEventListener('DOMContentLoaded', function() {
  let options ={
    "indicators": true,
    "duration": 350,
    "height":200

  }
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});


//
// Select
//
document.addEventListener('DOMContentLoaded', function() {
  let options= {}
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});



  
 

