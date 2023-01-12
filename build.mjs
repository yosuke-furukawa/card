'use strict'

import colo from 'colo';
import boxen from 'boxen';
import fs from 'node:fs';

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + colo definitions
const data = {
  name: colo.white('           Yosuke Furukawa'),
  handle: colo.white('yosuke_furukawa'),
  work: colo.white('Japan Node.js Association Representative Director'),
  twitter: colo.grey('https://twitter.com/') + colo.cyan('yosuke_furukawa'),
  npm: colo.grey('https://npmjs.com/') + colo.red('~yosuke-furukawa'),
  github: colo.grey('https://github.com/') + colo.green('yosuke-furukawa'),
  web: colo.cyan('https://yosuke-furukawa.hatenablog.com/'),
  npx: colo.red('npx') + ' ' + colo.white('@yosuke-furukawa/card'),
  labelWork: colo.white.bold('    Work:'),
  labelTwitter: colo.white.bold(' Twitter:'),
  labelnpm: colo.white.bold('     npm:'),
  labelGitHub: colo.white.bold('  GitHub:'),
  labelWeb: colo.white.bold('     Web:'),
  labelCard: colo.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelWork + data.work
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync('./bin/output', colo.green(boxen(output, options)));
