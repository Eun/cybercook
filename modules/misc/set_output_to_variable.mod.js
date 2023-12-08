module = {
    name: 'set output to variable',
    description: 'set the output to a variable',
    categories: ['misc'],
    properties: [
        {
            name: 'Variable Name',
            type: 'text',
            default: 'var1'
        },
    ],
    run: function (str, variableName) {
        if (variableName === undefined || variableName === '') {
            throw "variable cannot be empty"
        }
        console.log(window.__cybercook_variables, variableName)
        return window.__cybercook_variables[variableName];
    }
}
