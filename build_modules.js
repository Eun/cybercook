const path = require('path'),
      fs = require('fs');

modules = []

function fromDir(startPath, filter) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.endsWith(filter)) {
            console.log(`loading ${filename}...`);
            const data = fs.readFileSync(filename, {encoding: 'utf8', flag: 'r'});
            try {
                const result = eval(data);
                if (result.name === undefined || result.run === undefined) {
                    continue;
                }
                modules.push({
                    name: result.name,
                    categories: result.categories || [],
                    description: result.description || '',
                    path: filename,
                })
            } catch (e) {
                console.log(`unable to load ${filename}: ${e.message}`);
            }
        }
    }
}

fromDir('./modules', '.mod.js');
fs.writeFileSync('modules.json', JSON.stringify(modules))
