

module firstInterface {

    function printLabel(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }

    interface LabbedValue {
        label: string;
    }

    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);


    interface SqureConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SqureConfig):
        { color: string, area: number } {
        var newSqure = { color: "white", area: 100 };
        if (config.color) {
            newSqure.color = config.color;
        }
        if (config.width) {
            newSqure.area = config.width * config.width;
        }
        return newSqure;
    }

    var mySqure = createSquare({ color: "blank" });
}

// function type
module functionType {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    var mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        var result = source.search(subString);
        if (result == -1) return false;
        return true;
    }
}

// array types
module ArrayType {
    interface StringArray {
        [index: number]: string
    }

    var myArray: StringArray = ["Bob", "Fred"];

    interface Dictionary {
        [index: string]: string;
        //length: number;
    }
}


// class type
module classType {
    interface ClockInterface {
        currentTime: Date;
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        constructor(h: number, n: number) { }
    }

    // difference bettween static/instatnce side of class
    module diffence {

        interface ClockInterface2 {
            new (hour: number, minute: number);
        }
    }

    /*
    class Clock2 implements ClockInterface2 {
        currentTime: Date;
        constructor(h: number, m: number) {}
    }*/

    interface ClockStatic {
        new (hour: number, minute: number);
    }

    class Clock3 {
        currentTime: Date;
        constructor(h: number, m: number) { }
    }

    var cs: ClockStatic = Clock3;
    var newClick = new cs(10, 10);
}

// extending interface
module extendInterface {
    interface Shape {
        color: string;
    }

    interface Square2 extends Shape {
        sideLength: number;
    }

    var square = <Square2> {};
    square.color = "blue";
    square.sideLength = 10;

    interface PendStroke {
        pedWidth: number;
    }

    interface Square3 extends Shape, PendStroke {
        sideLength: number;
    }

    var square3 = <Square3> {};
    square3.color = "blue";
    square3.sideLength = 50;
    square3.pedWidth = 50;
}

// hybrid types
module hybridType {
    interface Couter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    var c: Couter;
    c(10);
}


module classes {

    class Greeter {
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
        }

        greet(): string {
            return "Hello, " + this.greeting;
        }
    }

    var geeter = new Greeter("Hello");
}


module interitance {
    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(meters: number = 0) {
            alert(this.name + " moved" + meters + "m.");
        }
    }

    class Snake extends Animal {
        constructor(name: string) { super(name); }
        move(meters = 5) {
            alert("slithering...");
            super.move(meters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(meters = 45) {
            alert("Gallooping");
            super.move(meters);
        }
    }

    var sam = new Snake("Summy the Python");
    var tom: Animal = new Horse("Tommy the Palomino");
    sam.move()
    tom.move(35);
}


module publicByDefault {
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
        meove(meters: number) {
            alert(this.name + " moved " + meters + "m.");
        }
    }
}

module underStandPrivate {
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name:  string;
        constructor(theName: string) { this.name = theName; }
    }

    var animal = new Animal("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");

    animal = rhino;
    // animal = employee;
}

module parameterProperty {
    class Animal {
        constructor(private name: string) {

        }
        move(meters: number) {
            alert(this.name + "moved " + meters + "m.");
        }
    }
}

module accessor {
    class Employee {
        fullName: string;
    }

    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if(employee.fullName) {
        alert(employee.fullName);
    }
}

module setget {
    var passcode = "secret passcode";

    class Employee {
        private _fullName: string;
        get fullName(): string { return this._fullName; }
        set fullName(newName: string) {
            if(passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }else {
                alert("error");
            }
        }
    }
}

module staticProperties {
    class Grid {
        static origin = { x: 0, y: 0};
        calculateDistanceFromOrigin(point: { x: number, y: number}) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * yDist + yDist * yDist) / this.scale;
        }

        constructor(public scale: number) {}
    }

    var grid1 = new Grid(1.0);
    var grid2 = new Grid(5.0);

    alert(grid1.calculateDistanceFromOrigin({x:10, y: 10}));
    alert(grid1.calculateDistanceFromOrigin({x:10, y: 10}));
}

module advancedTechnique {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "hello, " + this.greeting;
        }
    }

    var greeter: Greeter;
    greeter = new Greeter("world");
}

module useingClassAsAnInterface {
    class Point {
        x: number;
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }
    var point3d: Point3d = { x: 1, y:2, z: 3};
}

module moduels {

}


module functions {
    function add(x,y) {
        return x + y;
    }

    var myAdd = function(x,y) { return x + y};
}

module functionTypes {
    function add(x: number ,y: number): number {
        return x + y;
    }

    var myAdd = function(x: number, y: number): number { return x + y;}


    var myAdd: (x: number, y: number) => number;
    myAdd = (x,y) => x + y;
}

module optionalAndDefaultParameters {
    function buildName(firstName: string, lastName?: string) {
        return firstName + " " + lastName;
    }


    var result1 = buildName("Bob");
    //var result2 = buildName("Bob", "Adams", "Sr.");
    var result3 = buildName("Bob","Adams");
}


module restParameters {
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
}














var end = "end";
