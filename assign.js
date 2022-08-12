function radianToDegree(radian) {

    let convert = radian * 180 / 3.1416;
    let fixedPoint = convert.toFixed(2);
    let degree = parseFloat(fixedPoint);
    return degree;

}

function Checkfiles() {
    let extension = fileName.substring(fileName.lastIndexOf
    ('.') + 1);
    if(extension == 'js') {
        return true;
}
else {
    return false;
}

}

function oilPrice(dieselQuantity, petrolQuantity,
    octaneQuantity) {
    const diesel PerLitre = 114;
    const petrolPerLitre = 130;
    const octane PerLitre = 135;

    const dieselprice = dieselQuantity * dieselPerLitre;
    const petrolPrice = petrolQuantity * petrolPerLitre;
    const octanePrice = octaneQuantity * octanePerLitre;
    const totalPrice = diesel Price + petrolPrice +
        octanePrice;
    return totalPrice
}


function publicBusFare(totalPassenger){
    const reservedBus = 50;
    const microBus = 11;
    const publicBusTicket = 250;
   
    let busRemaining = totalPassenger % reservedBus ;
    let microBusRemaining = busRemaining % microBus;
    let publicBus = publicBusTicket * microBusRemaining;
   
    return publicBus;
   
}

// User Input - 50, 55, 112, 235, 365
const totalPublicBusCost = publicBusFare(10);
console.log(totalPublicBusCost);



const object1 = { name: "abul", friend: "babul" };
const object2 = { name: "babul", friend: "abul" };

function isBestFriend(object1, object2) {

    if(object1.name === object2.friend && object1.friend === object2.name){
        return true;
    }else{
        return false
    }
}

console.log(isBestFriend(object1, object2));
