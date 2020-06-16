for (var i = 0; i < num_points; i++) {
    points.push(new Point(5, (w - 20) * Math.random() + 10, (h - 20) * Math.random() + 10, 5 * Math.random(), 5 * Math.random(), radius))
    colors.push([255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random()])
}
let system = new System(points, 3)

function setup() {
    
    // adding color scheme button
    colorbtn = createSelect('Color scheme')
    colorbtn.parent('buttonsHere')
    colorbtn.option('Random colors')
    colorbtn.option('Noise')
    colorbtn.selected('Random colors')    
    colorbtn.changed(onColorClick)

    // adding metric button
    metricbtn = createSelect('Metric')
    metricbtn.parent('buttonsHere')
    metricbtn.option('Plane euclidean distance')
    metricbtn.option('Plane taxicab distance')
    metricbtn.selected('Plane euclidean distance')
    metricbtn.changed(onMetricClick)
    
    var cnvs = createCanvas(w, h);
    cnvs.parent('canvasHere')
    var canvas = document.getElementById('defaultCanvas0')
    pixelDensity(1);
    frameRate(60)
    canvas.addEventListener('click', onClick)
}

function draw() {
    system.voronoy();
    system.updateRandomMovement();
}