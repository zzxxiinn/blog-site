"use strict";

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Fontmin = require('fontmin');
const fs = require('fs-extra');

const basePath = path.join(__dirname, '../..')
const fontSrc = path.join(basePath, 'resource/fonts/vonwaon-bitmap/VonwaonBitmap-12px.ttf')
const fontDest = path.join(basePath, 'src/styles/typography.min.css')

async function calcGlyph() {
  let stdout, stderr
  const command = `-e '[\\w\\d\\p{P}]' ${basePath} -oN --no-filename | sort | uniq | tr -d '\\n'`
  if (process.platform === 'darwin') {
    ({ stdout, stderr } = await exec(`${__dirname}/tools/ripgrep-darwin/rg ${command}`));
  } else {
    ({ stdout, stderr } = await exec(`rg ${command}`));
  }

  console.log('💡 Got those characters:', stdout);
  if (stderr) {
    console.error('⛔ Got characters failed with error:', stderr);
    throw stderr
  }

  return stdout
}
// contents = fs.readFileSync('/path/to/file.jpg', {encoding: 'base64'});
async function genFonts() {
  var fontmin = new Fontmin()
    .src(fontSrc)
    .use(Fontmin.glyph({
      text: await calcGlyph(),
      hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    }));

  fontmin.run(function (err, files) {
    if (err) { throw err; }
    // console.log(files[0].contents.toString('base64'));
    const fontBase64 = files[0].contents.toString('base64');
    const templateFontFamily = `@font-face {
  font-family: "VonwaonBitmap";
  src: url(data:application/font-ttf;charset=utf-8;base64,${fontBase64}) format('truetype');
}`;
    console.log('📦 Generating Fonts at: ', fontDest)
    fs.ensureDirSync(path.dirname(fontDest))
    fs.writeFile(fontDest, templateFontFamily)
    console.log('✨ New font file generated!');
  });
}

async function main() {
  try {
    await genFonts()
  } catch (e) {
    console.log(e);
  }
}

main()
