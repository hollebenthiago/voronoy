function onClick(event) {
    var rect = document.getElementById('defaultCanvas0').getBoundingClientRect();
    var willAdd = true
    if (event.type == 'click' || event.type == 'touchstart') {
        mousepos = {x: (event.clientX - rect.left) / (rect.right - rect.left) * w,
            y: (event.clientY - rect.top) / (rect.bottom - rect.top) * h
        }
        for (let i = 0; i < system.points.length; i++) {
            if (Math.abs(system.points[i].x - mousepos.x) < system.points[i].radius && 
                Math.abs(system.points[i].y - mousepos.y) < system.points[i].radius) {
                    system.points.splice(i, 1)
                    willAdd = false
                    break   
                }
        }
        if (willAdd) {
            system.points.push(new Point(5, mousepos.x, mousepos.y, 5 * Math.random(), 5 * Math.random(), 15))
            colors.push([255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random()])
        }
        
    }
}

function onColorClick() {
    let cscheme = colorbtn.value();
    system.colorscheme = cscheme
}

function onMetricClick() {
    topology = metricbtn.value();
}