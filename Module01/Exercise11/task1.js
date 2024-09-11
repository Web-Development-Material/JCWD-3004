//Excel column converter
function convertColumn(column){
    let letterValue1 = column.charCodeAt(0) - 64
    let letterValue2 = column.charCodeAt(1) - 64
    let letterValue3 = column.charCodeAt(2) - 64

    if (column.length === 1){
        return letterValue1;

    } else if (column.length === 2){
        return letterValue1 * 26 + letterValue2;

    } else if (column.length === 3){
        return (letterValue1 * 26 + letterValue2) * 26 + letterValue3; 
    }
};
let excelColumn = "AB";
console.log(convertColumn(excelColumn));