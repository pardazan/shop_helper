let Message = "Result:";
let tmpBasketItem = document.getElementsByClassName("o-basket__item");
console.log("Basket Items:");
console.log(tmpBasketItem);
for (i = 0; i < tmpBasketItem.length; i++) {
    tmpBasketItem[i].style.backgroundColor = "Yellow";
}

let tmpBasketPrice = document.getElementsByClassName("o-productPrice__salePrice");
console.log("Basket Prices:");
console.log(tmpBasketPrice);
for (i = 0; i < tmpBasketPrice.length; i++) {
    tmpBasketPrice[i].style.backgroundColor = "white";
    console.log("Pupup Price[" + i + "] : " + tmpBasketPrice[i].innerText)
    console.log("Pupup Price HTML[" + i + "] : " + tmpBasketPrice[i].innerHTML)
    Message += "Price[" + i + "] : " + tmpBasketPrice[i].innerText + "\n";
} 
alert(Message);
//Here we can send Message to any URL as a parameter