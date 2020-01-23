function getBasket() {
    chrome.tabs.executeScript({
      file: 'myScripts.js'
    }); 
  }
  document.getElementById('btnGetBasket').addEventListener('click', getBasket);
