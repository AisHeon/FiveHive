const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join('C:', 'Users', 'ashay', 'website', '.understand-anything', 'tmp', 'ua-scan-files.json'), 'utf8'));
console.log('totalFiles:', data.totalFiles);
console.log('filteredByIgnore:', data.filteredByIgnore);
console.log('complexity:', data.estimatedComplexity);
console.log('byCategory:', JSON.stringify(data.stats.byCategory));
console.log('byLanguage:', JSON.stringify(data.stats.byLanguage));
