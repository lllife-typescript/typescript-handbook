

function printLabel(labelledObj: { label: string} ) {
    console.log(labelledObj.label);
}

interface LabbedValue {
    label: string;
}

var myObj = { size: 10, label: "Size 10 Object"};
printLabel(myObj);


interface SqureConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SqureConfig): { color: string, area: number } {
    var newSqure ={ color: "white", area: 100 };
    if(config.color) {
        newSqure.color = config.color;
    }
    if(config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}

var mySqure = createSquare({ color: "blank"});

interface SearchFunc {
    (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
        var result = source.search(subString);
        if(result == -1) return false;
        return true;
}
