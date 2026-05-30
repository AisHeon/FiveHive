const fs = require('fs');
const path = require('path');
const scanData = JSON.parse(fs.readFileSync(path.join('C:', 'Users', 'ashay', 'website', '.understand-anything', 'tmp', 'ua-scan-files.json'), 'utf8'));
const input = {
  projectRoot: 'C:\\Users\\ashay\\website',
  files: scanData.files.map(f => ({ path: f.path, language: f.language, fileCategory: f.fileCategory }))
};
fs.writeFileSync(path.join('C:', 'Users', 'ashay', 'website', '.understand-anything', 'tmp', 'ua-import-map-input.json'), JSON.stringify(input, null, 2));
console.log('Wrote input for', input.files.length, 'files');
