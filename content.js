if (document.URL.indexOf("https://www.boyner.com.tr/sepet") >= 0) {
    alert("شما اینک در مرحله پایانی خرید هستید");
    setTimeout(() => {

        var div = document.createElement('div');
        var btnForm = document.createElement('form');
        var btn = document.createElement('input');
        var link = document.createElement('a')
        //append all elements
        document.body.appendChild(div);
        div.appendChild(btnForm);
        btnForm.appendChild(btn);
        btnForm.appendChild(link);
        //set attributes for div
        div.id = 'myDivId';
        div.style.position = 'fixed';
        div.style.top = '0%';
        div.style.left = '20%';
        div.style.width = '20%';
        div.style.height = '10%';
        div.style.backgroundColor = 'Green';

        //set attributes for btnForm
        btnForm.action = '';

        //set attributes for btn
        //"btn.removeAttribute( 'style' );
        btn.type = 'button';
        btn.value = 'انتقال به سایت خرید ما';
        btn.style.position = 'absolute';
        btn.style.top = '50%';
        btn.style.left = '20%';
        btn.style.backgroundColor = 'Red'
        btn.id = 'btnSendToOurSite'

        //set attributes for hyperlink
        //"btn.removeAttribute( 'style' );
        link.type = 'a';
        link.href = 'http://apcoware.ir/UserPersonalPage.aspx'
        link.innerText = 'انتقال به سایت خرید ما';
        link.style.position = 'absolute';
        link.style.top = '10%';
        link.style.left = '20%';
        link.style.backgroundColor = 'Yellow'
        link.id = 'lnkSendToOurSite'

        let tmpBasketItem = document.getElementsByClassName("o-basket__item");
        console.log("Basket Items:");
        console.log(tmpBasketItem);
        for (i = 0; i < tmpBasketItem.length; i++) {
            tmpBasketItem[i].style.backgroundColor = "Green";
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
        document.getElementById('btnSendToOurSite').addEventListener('click', sendBasket);

        //Here we can send Message to any URL as a parameter

        function sendBasket() {
            alert("We will send the basket here")
        }
    }, 5000);
}

if (document.URL.indexOf("http://apcoware.ir/UserPersonalPage.aspx") >= 0) {
    alert("شما اینک در صفحه سایت اندیشه هستید");
    setTimeout(() => {
        var div = document.createElement('div');
        var btnForm = document.createElement('form');
        var btn = document.createElement('input');
        var link = document.createElement('a')
        //append all elements
        document.body.appendChild(div);
        div.appendChild(btnForm);
        btnForm.appendChild(btn);
        btnForm.appendChild(link);
        //set attributes for div
        div.id = 'myDivId';
        div.style.position = 'fixed';
        div.style.top = '0%';
        div.style.left = '20%';
        div.style.width = '20%';
        div.style.height = '10%';
        div.style.backgroundColor = 'Green';

        //set attributes for btnForm
        btnForm.action = '';

        //set attributes for btn
        //"btn.removeAttribute( 'style' );
        btn.type = 'button';
        btn.value = 'انتقال به سایت خرید ما';
        btn.style.position = 'absolute';
        btn.style.top = '50%';
        btn.style.left = '20%';
        btn.style.backgroundColor = 'Red'
        btn.id = 'btnSendToOurSite'

        //set attributes for hyperlink
        //"btn.removeAttribute( 'style' );
        link.type = 'a';
        link.href = 'https://www.boyner.com.tr/sepet'
        link.innerText = 'انتقال به سایت بوینر';
        link.style.position = 'absolute';
        link.style.top = '10%';
        link.style.left = '20%';
        link.style.backgroundColor = 'Yellow'
        link.id = 'lnkSendToOurSite'

        let tmpBasketItem = document.getElementsByClassName("o-basket__item");
        console.log("Basket Items:");
        console.log(tmpBasketItem);
        for (i = 0; i < tmpBasketItem.length; i++) {
            tmpBasketItem[i].style.backgroundColor = "Green";
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
        document.getElementById('btnSendToOurSite').addEventListener('click', sendBasket);

        //Here we can send Message to any URL as a parameter

        function sendBasket() {
            alert("We will send the basket here")
        }
    }, 2000);
}

if (document.URL.indexOf("http://apcoware.ir/Relation.aspx") >= 0) {
    alert("شما اینک در صفحه ارتباط سایت اندیشه هستید");
    setTimeout(() => {
        var div = document.createElement('div');
        document.body.appendChild(div);

        //set attributes for div
        div.id = 'myDivId';
        div.style.position = 'fixed';
        div.style.top = '0%';
        div.style.left = '20%';
        div.style.width = '20%';
        div.style.height = '10%';
        div.style.backgroundColor = 'Cyan';
        div.style.alignItems = 'center'
        //div.innerHTML = "<h3 style='text-align: center;'><a  href='http://www.apcoware.ir' title='اندیشه پرداز'>ApcoWare</a></h3>"
        //div.innerHTML = "<iframe src='F:/APCO/Software/Workspace/JS/Chrome_Ext/Shop_Helper/templates/options.html'></iframe>";
        //div.innerHTML = "<iframe src='/templates/options.html'></iframe>";
        div.innerHTML = "<iframe src='http://www.apcoware.ir/UsersFiles/sohail.html'></iframe>";
        //Here we have a div and can append any html we want inside it! awesome
    }, 2000);
}
