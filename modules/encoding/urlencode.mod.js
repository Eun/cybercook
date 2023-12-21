module = {
    name: 'urlencode',
    description: 'url encode an string',
    categories: ['string', 'url'],
    properties: [],
    run: async function (text) {
        return encodeURI(text);
    }
}
