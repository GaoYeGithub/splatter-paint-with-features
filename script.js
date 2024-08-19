tool.fixedDistance = 50;

var layer = project.activeLayer;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onMouseMove(event) {
  var synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(Math.random() * 1000, "8n");

  var shapeType = Math.floor(Math.random() * 3);
  var path;
  if (shapeType === 0) {
    path = new Path.Circle({
      center: event.middlePoint,
      radius: event.delta.length
    });
  } else if (shapeType === 1) {
    path = new Path.Ellipse({
      center: event.middlePoint,
      size: [Math.random() * 60 + 10, Math.random() * 30 + 5]
    });
  } else {
    path = new Path.Rectangle({
      point: event.middlePoint,
      size: [Math.random() * 30 + 5, Math.random() * 30 + 5]
    });
  }
  path.fillColor = {
    hue: Math.random() * 360,
    saturation: 1,
    brightness: 1
  };

  path.onFrame = function(event) {
    this.rotate(3);
  };
}

