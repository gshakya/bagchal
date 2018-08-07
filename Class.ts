abstract class Animal {
    private name: string;

    /**
     *
     */
    constructor(theName: string) {
        this.name = theName;
    }


    walk(distance: number) {
        console.log("I'm " + this.name + ". Walked " + distance + " meters");
    }
}



class Snake extends Animal {
    constructor(theName: string) {
        super(theName);
    }
    walk(distance: number) {
        console.log("Snakes don't walk")
    }
}

let mySnake = new Snake("Hiss");
mySnake.walk(10)
