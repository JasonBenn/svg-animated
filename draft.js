$('document').ready(function() {

  var s = Snap('#svg')

  setInterval(function() {
    var circle = s.circle(500, 500, 0)

    circle.attr({
      fill: '#fff',
      stroke: 'blue',
      strokeWidth: 5
    })

    circle.animate({
      r: 300,
      stroke: '#bada55',
      opacity: 0
    }, 3000, mina.easein)

    setTimeout(function() {
      circle.remove();
    }, 3000)

  }, 2000)

});