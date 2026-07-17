const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;
            
            // Case-sensitive replace for "Front Desk"
            if (content.includes('Front Desk')) {
                content = content.replace(/Front Desk/g, 'FlowDesk');
                updated = true;
            }
            // Case-sensitive replace for "front desk"
            if (content.includes('front desk')) {
                content = content.replace(/front desk/g, 'FlowDesk');
                updated = true;
            }
            
            if (updated) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Replaced in ${fullPath}`);
            }
        }
    });
}
replaceInDir(path.join(__dirname, 'components'));
replaceInDir(path.join(__dirname, 'lib'));
