//constructor for each point
function Point(m, x, y, velx, vely, radius, ) {
    this.m      = m
    this.x      = x
    this.y      = y
    this.velx   = velx
    this.vely   = vely
    this.radius = radius
    this.draw   = function () {
        circle(this.x, this.y, this.radius)
    }
}