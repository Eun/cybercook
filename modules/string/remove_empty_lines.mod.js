module = {
    name: 'remove empty lines',
    description: 'removes empty lines from the input',
    categories: ['string', 'every_line'],
    properties: [],
    run: async function (text) {
        return text.split("\n").filter(x => x.trim() !== '').join("\n");
    }
}
