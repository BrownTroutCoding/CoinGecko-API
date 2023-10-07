var btcPrice = document.querySelector(".coin-price:nth-child(1) h1:first-child");
var adaPrice = document.querySelector(".coin-price:nth-child(2) h1:first-child");
var linkPrice = document.querySelector(".coin-price:nth-child(3) h1:first-child");
var dogePrice = document.querySelector(".coin-price:nth-child(4) h1:first-child");
var ethPrice = document.querySelector(".coin-price:nth-child(5) h1:first-child");


var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cchainlink%2Cdogecoin%2Cethereum&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function(response) {
    btcPrice.innerHTML = '$' + response.bitcoin.usd;
    adaPrice.innerHTML = '$' + response.cardano.usd;  // Assuming CoinGecko returns 'cardano', adjust if different
    linkPrice.innerHTML = '$' + response.chainlink.usd;
    dogePrice.innerHTML = '$' + response.dogecoin.usd;
    ethPrice.innerHTML = '$' + response.ethereum.usd;
});

