for (var i = 0; i < num_points; i++) {
    points.push(new Point(5, (w - 20) * Math.random() + 10, (h - 20) * Math.random() + 10, 5 * Math.random(), 5 * Math.random(), 15))
    colors.push([255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random()])
}
let system = new System(points, 3)

function setup() {
    var cnvs = createCanvas(w, h);
    cnvs.parent('canvasHere')
    pixelDensity(1);
    frameRate(60)
}

function draw() {
    system.voronoy();
    system.update();
}