module = {
    name: 'unquote',
    description: 'unquote a string',
    categories: ['string'],
    properties: [],
    run: function (text) {
        return JSON.parse(text);
    }
}
