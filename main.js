var handleData = function(data) {
	var mainContent = $('#content');

	// iterate over each object inside the results array
	data.results.forEach(function(value, index, array) {
		var container = $('<div class="search-result"></div>');
		var urls = $('<a></a>', {href: value.url});
		var images = $('<img>', {src: value.Images[0].url_170x135});
		var itemDetails = $('<div class="details"></div>');
		var titles = $('<div class="item-title"></div>').append($('<a></a>', {href: value.url}).html(value.title));
		var storeNames = $('<div></div>').html(value.Shop.shop_name);
		var priceCurrency = $('<div></div>').html(value.price + ' ' + value.currency_code);
		
		mainContent.append(container);
		urls.append(images);
		container.append(urls);
		container.append(itemDetails);
		//urls.append(titles);
		itemDetails.append(titles);
		itemDetails.append(storeNames);
		itemDetails.append(priceCurrency);
		//container.append(images).append(titles).append(storeNames).append(priceCurrency);
		// find urls --> console.log(value.url);

		// find images --> console.log(value.Images[0].url_570xN); 
	
		// find titles --> console.log(value.title); list of titles

		// find shop name --> console.log(value.Shop.shop_name);

		// find price and currency code --> 
		//console.log(value.price + ' ' + value.currency_code);

		// list each of the 25 array objects --> console.log(value);
	});

	console.log(data);
}

var settings = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=s51fl4v3ydav4s166npz6b08&keywords=whiskey&includes=Images,Shop',
	dataType: 'jsonp',
	type: 'GET',
	success: handleData,
};



//console.log(setting.dataType)

$.ajax(settings);