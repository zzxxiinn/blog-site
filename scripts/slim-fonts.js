"use strict";

const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const Fontmin = require('fontmin');
const fs = require('fs-extra');

const fontSrc = path.join(__dirname, '..', 'resource/fonts/vonwaon-bitmap/VonwaonBitmap-12px.ttf')
const fontDest = path.join(__dirname, '..', 'src/styles/typography.min.css')

async function calcGlyph() {
  const { stdout, stderr } = await exec(`rg -e '[\\w\\d\\p{P}]' ../ -oN --no-filename | sort | uniq | tr -d '\\n'`);
  console.log('stdout:', stdout);
  if (stderr) {
    console.error('stderr:', stderr);
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
    if (err) {  throw err; }
    // console.log(files[0].contents.toString('base64'));
    const fontBase64 = files[0].contents.toString('base64');
    const templateFontFamily = `@font-face {
  font-family: "VonwaonBitmap";
  src: url(data:application/font-ttf;charset=utf-8;base64,${fontBase64}) format('truetype');
}`;
    fs.ensureDirSync(path.dirname(fontDest))
    fs.writeFile(fontDest,templateFontFamily)
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
