#!/usr/bin/env node

'use strict'

const fs = require('node:fs');
const path = require('node:path');
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8');
console.log(output);
