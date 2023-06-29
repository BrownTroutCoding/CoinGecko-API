// http://api.coinlayer.com/2018-04-30?access_key=80a9a2406f231c0bceb184461a3d7b89

$(document).ready(function() {
    var currencies = ['BTC', 'ADA', 'LINK', 'DOGE', 'ETH'];
    var url = 'http://localhost:3000/api/';
    var endpoint = 'live';
    var apiUrl = url + endpoint;

    $.get(apiUrl, function(data) {
        // update each coin price in HTML
        $('.coin-price').each(function(index) {
            var coin = currencies[index];
            var price = data.rates[coin];
            $(this).find('h1:first-child').text('$' + price.toFixed(2));
        })
    })
})
