yarn umi-lib build --cjs &&
npm version patch &&
cp package.json ./dist/package.json &&
cp README.md ./dist/README.md &&
cp -R readme ./dist/readme &&
cd ./dist &&
npm publish
cd ../