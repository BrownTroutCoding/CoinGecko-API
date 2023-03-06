// http://api.coinlayer.com/2018-04-30?access_key=80a9a2406f231c0bceb184461a3d7b89

// set endpoint and your API access key
var endpoint = 'live';
var access_key = '1676521fc58113a4eff8ddf3d2534c03';

// Use jQuery to make a GET request to the coinlayer API endpoint to retrieve
// the current exchange rates in USD for the cryptocurrencies
$(document).ready(function() {
    var currencies = ['BTC', 'ADA', 'LINK', 'DOGE', 'ETH'];
    var url = 'http://api.coinlayer.com/api/';
    var apiUrl = url + endpoint + '?access_key=' + access_key + '&symbols=' + currencies.join(',');

    $.get(apiUrl, function(data) {
        // update each coin price in HTML
        $('.coin-price').each(function(index) {
            var coin = currencies[index];
            var price = data.rates[coin];
            $(this).find('h1:first-child').text('$' + price.toFixed(2));
        })
    })
})
