module = {
    name: 'count',
    description: 'count characters, words or lines in the input',
    categories: ['string'],
    properties: [
        {
            name: 'Mode',
            type: 'selection',
            default: 'characters',
            options: ['characters', 'words', 'lines']
        },
    ],
    run: async function (text, count_mode) {
        switch (count_mode) {
            case 'characters':
                return text.length;
            case 'words':
                return text.trim().split(/\s+/).length;
            case 'lines':
                if (text.trim() === "") {
                    return 0;
                }
                return text.split("\n").length;
            default:
                throw new Error(`Invalid count mode (${count_mode})`);
        }
    }
}
