module = {
    name: 'replace with regex',
    description: 'replaces an old string with a new string using regular expressions',
    categories: ['string'],
    properties: [
        {
            name: 'Search Text Regex',
            type: 'text',
            default: '(Old)'
        },
        {
            name: 'Regex Flags',
            type: 'text',
            default: 'g'
        },
        {
            name: 'Replace Text',
            type: 'text',
            default: 'New $1'
        },
    ],
    run: async function (text, search, flags, replace) {
        const re = new RegExp(search, flags)
        return text.replace(re, replace);
    }
}
