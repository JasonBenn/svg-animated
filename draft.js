$('document').ready(function() {

  var configuration = { 
    play : {
      url : 'svg/play.svg',
      animation : [
        { 
          el : 'path', 
          animProperties : { 
            from : { val : '{"path" : "M 18.741071,52 31.30178,42.531655 45.258928,31.887987 18.741071,12 z"}' }, 
            to : { val : '{"path" : "m 12.5,52 39,0 0,-40 -39,0 z"}' }
          } 
        }
      ]
    }
  }


  var options = {
    speed: 200,
    easing: mina.linear,
    size: { w: 64, h: 64 },
    onLoad: function() { return true; }
  }

  new svgIcon($('.si-icon-play')[0], configuration, options)

});