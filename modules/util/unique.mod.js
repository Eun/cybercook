module = {
    name: 'unique',
    description: 'remove duplicates strings in the input',
    categories: ['util'],
    properties: [
        {
            name: 'Delimiter',
            type: 'text',
            default: '\\n'
        },
        {
            name: 'Display Count',
            type: 'boolean',
            default: false,
        },
    ],
    run: async function (text, delimiter, display_count) {
        let parts = text.split(delimiter);
        const uniqueArray = [];
        const occurrenceCount = {};

        parts.forEach(item => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
            if (display_count) {
                if (occurrenceCount[item]) {
                    occurrenceCount[item] += 1;
                } else {
                    occurrenceCount[item] = 1;
                }
            }
        });

        if (display_count) {
            for (let i = 0; i < uniqueArray.length; i++) {
                uniqueArray[i] = `${occurrenceCount[uniqueArray[i]]} ${uniqueArray[i]}`
            }
        }
        return uniqueArray.join(delimiter);
    }
}
