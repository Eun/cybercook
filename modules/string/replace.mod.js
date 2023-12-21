module = {
    name: 'replace',
    description: 'replaces an old string with a new string',
    categories: ['string'],
    properties: [
        {
            name: 'Search Text',
            type: 'text',
            default: 'Old'
        },
        {
            name: 'Replace Text',
            type: 'text',
            default: 'New'
        },
    ],
    run: async function (text, search, replace) {
        return text.replaceAll(search, replace);
    }
}
