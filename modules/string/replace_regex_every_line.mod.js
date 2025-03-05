module = {
    name: 'replace every line with regex',
    description: 'replaces an old string with a new string for evert line using regular expressions',
    categories: ['string', 'every_line'],
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
        return text.split('\n').map(line => line.replace(re, replace)).join('\n')
    }
}
