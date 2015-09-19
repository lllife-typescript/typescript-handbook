var isDone: boolean = false;
var height: number = 6;
var name: string = "bob";
name = "smith";

var list: number[] = [1,2,3];
var list:Array<number> = [1,2,3];

enum Color { Red, Green, Blue };
var c:Color = Color.Green;

var notSure: any = 4
notSure = "maybe a string instream";
notSure = false;

var lists: any[] = [1, true, "free" ];
lists[1] = 100;

function warnUser(): void {
    alert("This is my warning");
}
