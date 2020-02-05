if (document.URL.indexOf("https://www.boyner.com.tr/sepet") >= 0) {
    alert("شما اینک در مرحله پایانی خرید هستید");
    setTimeout(() => {

        var div = document.createElement('div');
        var btnForm = document.createElement('form');
        var btn = document.createElement('input');
        var link = document.createElement('a');
        //append all elements
        document.body.appendChild(div);
        div.appendChild(btnForm);
        btnForm.appendChild(btn);
       // btnForm.appendChild(link);
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
        let basket = "";
        for (i = 0; i < tmpBasketItem.length; i++) {
            tmpBasketItem[i].style.backgroundColor = "Green";
            basket += tmpBasketItem[i].innerText;
        }

        let tmpBasketPrice = document.getElementsByClassName("o-productPrice__salePrice");
        console.log("Basket Prices:");
        console.log(tmpBasketPrice);
        let strHTML = "";
        
        for (i = 0; i < tmpBasketPrice.length; i++) {
            tmpBasketPrice[i].style.backgroundColor = "white";
            console.log("Price[" + i + "] : " + tmpBasketPrice[i].innerText)
            console.log("Price HTML[" + i + "] : " + tmpBasketPrice[i].innerHTML)
            strHTML += "Price[" + i + "] : " + tmpBasketPrice[i].innerText;            
        }
       // div.innerHTML = "<h3 style='text-align: center;'><a  href='http://www.apcoware.ir' title='اندیشه پرداز'>" + strHTML + "</a></h3>"

        document.getElementById('btnSendToOurSite').addEventListener('click', sendBasket);

        //Here we can send Message to any URL as a parameter
        DocHTML = document.all[0].outerHTML;
        function sendBasket() {
            alert("We will send the basket here:\n" + basket)
           // var blob = new Blob([basket], { type: "text/plain;charset=utf-8" });           
           //saveAs(blob, "basket.html"); 
            
            var blob = new Blob([DocHTML], { type: "text/plain;charset=utf-8" });           
            saveAs(blob, "basket.html");            
        }
    }, 5000);
}

if (document.URL.indexOf("http://apcoware.ir/UserPersonalPage.aspx") >= 0) {
    alert("شما اینک در صفحه شخصی سایت اندیشه هستید");
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

        document.getElementById('btnSendToOurSite').addEventListener('click', sendBasket);

        //Here we can send Message to any URL as a parameter
        let DocHTML = document.body.innerText;
        DocHTML = document.all[0].outerHTML;
        function sendBasket() {
            alert("The Page HTML is:\n" + DocHTML);            
            var blob = new Blob([DocHTML], { type: "text/plain;charset=utf-8" });
            alert("Stage 1");
            saveAs(blob, "akbFile.html");
            alert("File Saved as");


            
        }
    }, 1000);
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


function saveAs(blob, fileName) {
    var url = window.URL.createObjectURL(blob);

    var anchorElem = document.createElement("a");
    anchorElem.style = "display: none";
    anchorElem.href = url;
    anchorElem.download = fileName;

    document.body.appendChild(anchorElem);
    anchorElem.click();

    document.body.removeChild(anchorElem);

    // On Edge, revokeObjectURL should be called only after
    // a.click() has completed, atleast on EdgeHTML 15.15048
    setTimeout(function() {
        window.URL.revokeObjectURL(url);
    }, 1000);
}

