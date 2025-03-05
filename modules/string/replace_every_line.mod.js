module = {
    name: 'replace every line',
    description: 'replaces an old string with a new string for every line',
    categories: ['string', 'every_line'],
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
        return text.split('\n').map(line => line.replace(search, replace)).join('\n')
    }
}
