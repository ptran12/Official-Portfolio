// Type.js //
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    // loopCount: null,
    showCursor: true,
    typeSpeed: 100,
    backSpeed: 100,
  });

//  media picture //
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
       
