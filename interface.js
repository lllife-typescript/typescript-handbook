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
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1)
        return false;
    return true;
};
