let product = {};
let temp = null;

function recievedData(obj) {
    // Receive OBJECT, Return NULL, Action Write property in obj
    temp = prompt(`Enter PRODUCT NAME:`);
    if (temp == "" || temp == null) {
        alert("Error, the received product name is empty!");
        return clearObject(obj);
    } obj.pName = temp;

    temp = prompt(`Enter ${obj.pName} STOCK NUMBER:`);
    if (checkError(temp)) return clearObject(obj);
    obj.pStock = +temp;

    temp = prompt(`Enter ${obj.pName} PRICE NUMBER:`);
    if (checkError(temp)) return clearObject(obj);
    obj.pPrice = +temp;

    temp = prompt(`Enter ${obj.pName} %DISCOUNT NUMBER:`);
    if (isNaN(+temp)) {
        alert("Error, the recieved data is not number!");
        return clearObject(obj);
    } if (temp != 0) obj.pDiscount = +temp;
}

function clearObject(obj) {
    // Receive OBJECT, Return NULL, Action clear all property inn obj
    Object.keys(obj).forEach(key => delete obj[key]);
}

function checkError(value) {
    // Receive VALUE, Return BOOLEAN
    if (isNaN(+value) || value == "" || value == null) {
        alert("Error, the recieved data is not number!");
        return true;
    }
    return false;
}

function actualPrice(obj) {
    // Receive OBJECT, Return STRING
    let calPrice = null;
    if (obj.hasOwnProperty("pStock") &&
        obj.hasOwnProperty("pPrice")) {
        calPrice = obj.pStock * obj.pPrice;
        if (obj.hasOwnProperty("pDiscount"))
            calPrice = calPrice * (100 - obj.pDiscount) / 100;
        return (`The price of ${obj.pName} after discount is: ${calPrice.toLocaleString()} THB`)
    } else
        return ("The data is not enough to calculate price");
}


recievedData(product);
alert(actualPrice(product));
console.log(product);