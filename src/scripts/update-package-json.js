const fs = require('fs');
const path = require('path');

// 读取原始 package.json 文件
const originalPackageJsonPath = path.join(__dirname, '../../package.json');
const originalPackageJson = JSON.parse(fs.readFileSync(originalPackageJsonPath, 'utf-8'));

// 创建一个新的 package.json 对象，修改 main 和 bin 路径
const newPackageJson = {
  ...originalPackageJson,
  main: 'dist/index.js', // 相对于 dist 目录
  bin: {
    'gen-api': 'dist/cli/cli.js' // 相对于 dist 目录
  },
  files:['dist',]

};

// 写入新的 package.json 文件到 dist 目录
const distPackageJsonPath = path.join(__dirname, '../../dist/package.json');
fs.writeFileSync(distPackageJsonPath, JSON.stringify(newPackageJson, null, 2), 'utf-8');

console.log('Copied and updated package.json to dist directory');