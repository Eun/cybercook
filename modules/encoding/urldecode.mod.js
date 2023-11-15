module = {
    name: 'urldecode',
    description: 'url decode the input',
    categories: ['string', 'url'],
    properties: [],
    run: function (text) {
        return decodeURI(text);
    }
}
