module = {
    name: 'invert case',
    description: 'invert the case of a string',
    categories: ['string'],
    properties: [],
    run: async function (str) {
        for (var i = 0; i < str.length; i++) {
            var char = str.charAt(i);
            if (char === char.toUpperCase()) {
                str = str.substring(0, i) + char.toLowerCase() + str.substring(i + 1);
            } else {
                str = str.substring(0, i) + char.toUpperCase() + str.substring(i + 1);
            }
        }
        return str;
    }
}
