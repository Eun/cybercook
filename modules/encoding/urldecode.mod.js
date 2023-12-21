module = {
    name: 'urldecode',
    description: 'url decode the input',
    categories: ['string', 'url'],
    properties: [],
    run: async function (text) {
        return decodeURI(text);
    }
}
