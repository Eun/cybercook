module = {
    name: 'urlencode',
    description: 'url encode an string',
    categories: ['string', 'url'],
    properties: [
        {
            name: 'Encode all special chars',
            type: 'boolean',
            default: true,
        },
    ],
    run: async function (text, encodeAllSpecialChars) {
        if (encodeAllSpecialChars) {
            return encodeURIComponent(text);
        }
        return encodeURI(text);
    }
}
