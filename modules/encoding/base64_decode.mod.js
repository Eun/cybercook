module = {
    name: 'base64 decode',
    description: 'base64 decode a string',
    categories: ['string'],
    properties: [],
    run: async function (text) {
        return atob(text);
    }
}
