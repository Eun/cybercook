module = {
    name: 'base64 encode',
    description: 'base64 encode a string',
    categories: ['string'],
    properties: [],
    run: function (text) {
        return btoa(text);
    }
}
