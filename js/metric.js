//metric function for voronoy diagram
function metric(topology, a, b) {
    if (topology == 'Plane taxicab distance') {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }
    else if (topology == 'Plane euclidean distance') {
        return Math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)
    }
    else if (topology == 'cylinder l1') {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
    }
    else if (topology == 'cylinder l2') {
        return Math.sqrt(Math.min(Math.abs(a[0] - b[0]), Math.abs((w - a[0] - b[0]) % w))**2 + Math.abs(a[1] - b[1])**2)
    }
    else if (topology == 'torus l1') {
        return Math.min(Math.abs(a[0]  - b[0]) + Math.abs(a[1]  - b[1]), 
                        Math.abs((w - a[0]  - b[0]) % w)  + Math.abs(a[1]  - b[1]),
                        Math.abs(a[0]  - b[0]) + Math.abs((h - a[1] - b[1])   % h),
                        Math.abs((w - a[0]  - b[0]) % w   + Math.abs((h - a[1] - b[1]) % h)))
    }
    else if (topology == 'torus l2') {
        return Math.min(Math.sqrt((a[0]  - b[0])**2 + (a[1]  - b[1])**2), 
                        Math.sqrt(((w - a[0] - b[0]) % w)**2  + (a[1]  - b[1])**2),
                        Math.sqrt((a[0]  - b[0])**2 + ((h - a[1]   - b[1]) % h)**2),
                        Math.sqrt(((w - a[0] - b[0]) % w)**2  + ((h - a[1] - b[1]) % h)**2))
    }
}