//constructor for system of points
function System(points, gconst) {
    this.points = points
    this.gconst = gconst

    //x coordinate of the gforce
    this.gForcex = function(object1,object2) {
        if (object1.x == object2.x && object1.y == object2.y) {
            return 0;
        }  
        else {
            return (-object1.x+object2.x)*this.gconst*object2.m/(Math.sqrt((object1.x -object2.x)*(object1.x-object2.x) + 
                   (object1.y - object2.y)*(object1.y - object2.y))**3);
        }
    }

    //y coordinate of the gforce
    this.gForcey = function(object1,object2) {
        if (object1.x == object2.x && object1.y == object2.y) {
            return 0;
        }  
        else {
            return (-object1.y+object2.y)*this.g*object2.m/(Math.sqrt((object1.x -object2.x)*(object1.x-object2.x) + 
                   (object1.y - object2.y)*(object1.y - object2.y))**3);
        }
    }
    //update position of points
    this.update = function () {
        console.log('a')
        for (let i = 0; i < this.points.length; i++) {
            
            if (this.points[i].x + this.points[i].velx> w - this.points[i].radius) {
                
                this.points[i].velx = -this.points[i].velx 
                this.points[i].x = this.points[i].x - this.points[i].radius
            
            }
            
            if (this.points[i].x + this.points[i].velx < this.points[i].radius) {
            
                this.points[i].velx = -this.points[i].velx 
                this.points[i].x = this.points[i].x + this.points[i].radius
            
            }
            
            if (this.points[i].y + this.points[i].vely > h - this.points[i].radius) {
            
                this.points[i].vely = -this.points[i].vely 
                this.points[i].y = this.points[i].y - this.points[i].radius
            
            }
            
            if (this.points[i].y + this.points[i].vely < this.points[i].radius) {
              
                this.points[i].vely = -this.points[i].vely 
                this.points[i].y = this.points[i].y + this.points[i].radius
            }
            
            else {
                this.points[i].x = this.points[i].x + this.points[i].velx
                this.points[i].y = this.points[i].y + this.points[i].vely
            }
            
        }
    }
    //draws voronoy diagram of points at current position
    this.voronoy = function() {
        loadPixels();
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                let best;
                var index;
                let dist;
                for (var i = 0; i < num_points; i++) {
                    dist = metric(topology, [x, y], [points[i].x, points[i].y])
                    if (best < dist) {
                        continue
                    }
                    else {
                        best  = dist
                        index = i
                    }
                }
                var pix = (x + y * width) * 4;
                // console.log(colors[index])
                // pixels[pix + 0] = (colors[index][0] * best) % 160
                // pixels[pix + 1] = (colors[index][1] * best) % 100 + 100
                // pixels[pix + 2] = (colors[index][2] * best) % 50 + 50
                // pixels[pix + 3] = best * 5
                pixels[pix + 0] = (50 * best) % 160
                pixels[pix + 1] = (0 * best) % 100 + 100
                pixels[pix + 2] = (25 * best) % 50 + 50
                pixels[pix + 3] = best  * 2
            }
        }
        updatePixels();
        for (let i = 0; i < num_points; i++) {
            // circle(points[i][0], points[i][1], 10)
            this.points[i].draw();
        }
    }
}