module = {
    name: 'urlencode',
    description: 'url encode an string',
    categories: ['string', 'url'],
    properties: [],
    run: function (text) {
        return encodeURI(text);
    }
}
