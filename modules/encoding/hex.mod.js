module = {
    name: 'hex',
    description: 'encode input to hex',
    categories: ['hash', 'hex'],
    properties: [],
    run: function (text){
        return text.split("")
            .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
            .join("");

    }
}
