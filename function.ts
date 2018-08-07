function greet(firstName: string, lastName: string = "Smith"): void {
    console.log("Hello " + firstName + " " + lastName);
}

greet("Gunjan")

greet("Gunjan", "Shakya")