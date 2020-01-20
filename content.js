if (document.URL.indexOf("https://www.boyner.com.tr/sepet") >= 0) {
    alert("شما در مرحله پایانی خرید هستید");
    setTimeout(() => {
        let tmpBasketItem = document.getElementsByClassName("o-basket__item");
        console.log("Basket Items:");
        console.log(tmpBasketItem);
        for (i = 0; i < tmpBasketItem.length; i++) {
            tmpBasketItem[i].style.backgroundColor = "green";
        }

        let tmpBasketPrice = document.getElementsByClassName("o-productPrice__salePrice");
        console.log("Basket Prices:");
        console.log(tmpBasketPrice);
        for (i = 0; i < tmpBasketPrice.length; i++) {
            tmpBasketPrice[i].style.backgroundColor = "white";
            console.log("Price[" + i + "] : " + tmpBasketPrice[i].innerText)
            console.log("Price HTML[" + i + "] : " + tmpBasketPrice[i].innerHTML)
        }

        /*  let paragraphs = document.getElementsByTagName('p');
      
               for (elt of paragraphs) {
                  elt.style['background-color'] = '#CCCCCC';
              }
          const basketElement = document.querySelector('h1');
          const basketText = basketElement.textContent;
          console.log(basketText);
          const basketItemNumber = basketText.replace(/\D/g, '');
          for (i = 2; i <= parseInt(basketItemNumber) + 1; i++) {
              const basketitemsPriceFound = document.querySelector('div:nth-of-type(' + i + ') .o-productPrice ins');
              console.log('div:nth-of-type(' + i + ') .o-productPrice ins');
              console.log(basketitemsPriceFound.textContent);
          }
      
          const totalPay = document.querySelector('.-total div.o-orderSummary__itemVal');
          let totalPayText = totalPay.textContent;
          alert('Your final total payment is  ' + totalPayText + '\n' + 'You have choosen '
              + basketItemNumber + ' Number of products!'); */
    }, 5000);
}