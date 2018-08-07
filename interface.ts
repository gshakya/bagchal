interface RectangleOptions {
    width: number;
    length: number;
    height?: number; // optional  
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width
    let length = options.length

    if (options.height) {
        let height = options.height
    }

}

drawRectangle({ width: 5, length: 10 })