let thisBoolean: boolean = true


let myNumber: number = 1

let myName: string = "Gunjan"

let greeting: string = "Hello " + myName

let greeting2: string = `Hello , ${myName}`

let count: number[] = [1,2,3,4]

let count1: Array<number> = [1,2,3,4]

let anything: any =4
anything ="Name"
anything = false

function greeter(name: string) : void{
    console.log("Hello "+ name);
}
 // Enums
 enum Directions{Up, Down, Left, Right};

 console.log(Directions.Left)