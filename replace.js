const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('#18160E')) {
                content = content.replace(/#18160E/g, '#000000');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Replaced in ${fullPath}`);
            }
        }
    });
}
replaceInDir(path.join(__dirname, 'app'));
replaceInDir(path.join(__dirname, 'components'));
replaceInDir(path.join(__dirname, 'lib'));
