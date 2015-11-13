(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('browser').textContent = navigator.userAgent
    var canvasFontStyles = [
      'normal normal normal',
      'normal normal bold',
      'italic normal normal',
      'italic normal bold'
    ]
    var canvasText = 'abc🍻💕😁✨'
    Array.prototype.slice.apply(document.querySelectorAll('.canvas-normal-text')).forEach(function (canvas, index) {
      canvas.width = 200
      canvas.height = 40
      var context = canvas.getContext('2d')
      context.font = canvasFontStyles[index] + ' 30px Apple Color Emoji,arial'
      context.textBaseline = 'top'
      context.lineWidth = 2.0
      context.textAlign = 'left'
      context.fillText(canvasText, 0, 0)
    })
    Array.prototype.slice.apply(document.querySelectorAll('.canvas-stroke-text')).forEach(function (canvas, index) {
      canvas.width = 200
      canvas.height = 40
      var context = canvas.getContext('2d')
      context.lineJoin = "round"
      context.lineCap = "round"
      context.strokeStyle = 'white'
      context.font = canvasFontStyles[index] + ' 30px Apple Color Emoji,arial'
      context.textBaseline = 'top'
      context.lineWidth = 2.0
      context.textAlign = 'left'
      context.strokeText(canvasText, 0, 0)
    })
  })
})()
