module = {
    name: 'reverse',
    description: 'reverse the text',
    categories: ['string'],
    properties: [],
    run: function (text) {
        let newText = []
        for (var i = 0; i < text.length; i++) {
            newText.unshift(text.charAt(i))
        }
        return newText.join("");
    }
}