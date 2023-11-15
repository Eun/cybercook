module = {
    name: 'unquote',
    description: 'unquote the input',
    categories: ['string'],
    properties: [],
    run: function (text) {
        return JSON.parse(text);
    }
}
