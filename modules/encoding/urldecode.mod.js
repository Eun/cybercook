module = {
    name: 'urldecode',
    description: 'url decode an string',
    categories: ['string', 'url'],
    properties: [],
    run: function (text) {
        return decodeURI(text);
    }
}
