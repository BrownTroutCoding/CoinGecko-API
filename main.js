$(document).ready(function() {
    var currencies = ['BTC', 'ADA', 'LINK', 'DOGE', 'ETH'];
    var apiUrl = 'http://api.coinlayer.com/live?access_key=51d05fa3f63129165a8eadd9c49521e8&symbols=BTC,ADA,LINK,DOGE,ETH';

    $.get(apiUrl, function(data) {
        // update each coin price in HTML
        $('.coin-price').each(function(index) {
            var coin = currencies[index];
            var price = data.rates[coin];
            $(this).find('h1:first-child').text('$' + price.toFixed(2));
        })
    })
})
