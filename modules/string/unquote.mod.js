module = {
    name: 'unquote',
    description: 'unquote the input',
    categories: ['string'],
    properties: [],
    run: async function (text) {
        return JSON.parse(text);
    }
}
