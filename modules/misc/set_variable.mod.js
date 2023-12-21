module = {
    name: 'set variable',
    description: 'set a variable',
    categories: ['misc'],
    properties: [
        {
            name: 'Variable Name',
            type: 'text',
            default: 'var1'
        },
        {
            name: 'Variable Value',
            type: 'text',
            default: 'Hello World'
        },
    ],
    run: async function (str, variableName, variableValue) {
        if (variableName === undefined || variableName === '') {
            throw "variable cannot be empty"
        }
        window.__cybercook_variables[variableName] = variableValue;
        return str;
    }
}
