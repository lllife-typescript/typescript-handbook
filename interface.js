var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var firstInterface;
(function (firstInterface) {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function createSquare(config) {
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
})(firstInterface || (firstInterface = {}));
var functionType;
(function (functionType) {
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        if (result == -1)
            return false;
        return true;
    };
})(functionType || (functionType = {}));
var ArrayType;
(function (ArrayType) {
    var myArray = ["Bob", "Fred"];
})(ArrayType || (ArrayType = {}));
var classType;
(function (classType) {
    var Clock = (function () {
        function Clock(h, n) {
        }
        return Clock;
    })();
    var Clock3 = (function () {
        function Clock3(h, m) {
        }
        return Clock3;
    })();
    var cs = Clock3;
    var newClick = new cs(10, 10);
})(classType || (classType = {}));
var extendInterface;
(function (extendInterface) {
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
    var square3 = {};
    square3.color = "blue";
    square3.sideLength = 50;
    square3.pedWidth = 50;
})(extendInterface || (extendInterface = {}));
var hybridType;
(function (hybridType) {
    var c;
    c(10);
})(hybridType || (hybridType = {}));
var classes;
(function (classes) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    var geeter = new Greeter("Hello");
})(classes || (classes = {}));
var interitance;
(function (interitance) {
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            alert(this.name + " moved" + meters + "m.");
        };
        return Animal;
    })();
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            _super.call(this, name);
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            alert("slithering...");
            _super.prototype.move.call(this, meters);
        };
        return Snake;
    })(Animal);
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name);
        }
        Horse.prototype.move = function (meters) {
            if (meters === void 0) { meters = 45; }
            alert("Gallooping");
            _super.prototype.move.call(this, meters);
        };
        return Horse;
    })(Animal);
    var sam = new Snake("Summy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(35);
})(interitance || (interitance = {}));
var publicByDefault;
(function (publicByDefault) {
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.meove = function (meters) {
            alert(this.name + " moved " + meters + "m.");
        };
        return Animal;
    })();
})(publicByDefault || (publicByDefault = {}));
var underStandPrivate;
(function (underStandPrivate) {
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        return Animal;
    })();
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            _super.call(this, "Rhino");
        }
        return Rhino;
    })(Animal);
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    })();
    var animal = new Animal("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
})(underStandPrivate || (underStandPrivate = {}));
var parameterProperty;
(function (parameterProperty) {
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (meters) {
            alert(this.name + "moved " + meters + "m.");
        };
        return Animal;
    })();
})(parameterProperty || (parameterProperty = {}));
var accessor;
(function (accessor) {
    var Employee = (function () {
        function Employee() {
        }
        return Employee;
    })();
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        alert(employee.fullName);
    }
})(accessor || (accessor = {}));
var setget;
(function (setget) {
    var passcode = "secret passcode";
    var Employee = (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () { return this._fullName; },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    alert("error");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    })();
})(setget || (setget = {}));
var staticProperties;
(function (staticProperties) {
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * yDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    })();
    var grid1 = new Grid(1.0);
    var grid2 = new Grid(5.0);
    alert(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    alert(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})(staticProperties || (staticProperties = {}));
var advancedTechnique;
(function (advancedTechnique) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "hello, " + this.greeting;
        };
        return Greeter;
    })();
    var greeter;
    greeter = new Greeter("world");
})(advancedTechnique || (advancedTechnique = {}));
var useingClassAsAnInterface;
(function (useingClassAsAnInterface) {
    var Point = (function () {
        function Point() {
        }
        return Point;
    })();
    var point3d = { x: 1, y: 2, z: 3 };
})(useingClassAsAnInterface || (useingClassAsAnInterface = {}));
var functions;
(function (functions) {
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) { return x + y; };
})(functions || (functions = {}));
var functionTypes;
(function (functionTypes) {
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) { return x + y; };
    var myAdd;
    myAdd = function (x, y) { return x + y; };
})(functionTypes || (functionTypes = {}));
var optionalAndDefaultParameters;
(function (optionalAndDefaultParameters) {
    function buildName(firstName, lastName) {
        return firstName + " " + lastName;
    }
    var result1 = buildName("Bob");
    var result3 = buildName("Bob", "Adams");
})(optionalAndDefaultParameters || (optionalAndDefaultParameters = {}));
var restParameters;
(function (restParameters) {
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
})(restParameters || (restParameters = {}));
var end = "end";
