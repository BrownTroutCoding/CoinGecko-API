$(document).ready(function() {
    var currencies = ['BTC', 'ADA', 'LINK', 'DOGE', 'ETH'];
    var api_key = '51d05fa3f63129165a8eadd9c49521e8';
    var url = 'http://api.coinlayer.com/live';


    $.get(url, {access_key: api_key, symbols: currencies.join(',')}, function(data) {
        console.log("API Response:", data);
        // update each coin price in HTML
        $('.coin-price').each(function(index) {
            var coin = currencies[index];
            var price = data.rates[coin];
            $(this).find('h1:first-child').text('$' + price.toFixed(2));
        })
    })
})
