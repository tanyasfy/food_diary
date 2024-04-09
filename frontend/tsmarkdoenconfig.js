#!/usr/bin/env node
import {generateDocumentation} from 'tsdoc-markdown';
import fs from 'fs';

const folderPath = ['./src/utils', './src/types', './src/stores', './src/service'];
const backendFolderPath = ['./../service/src/types', './../service/src/utils', './../service/src/entities', './../service/src/plugins', './../service/src/routes', './../service/src/routes/users']

// Generate documentation for a list of files
const files = []
const inputBE = []

// Synchronously reading the directory's contents
folderPath.forEach(item => fs.readdirSync(item).map(file => {
  files.push(item + '/' + file);
}));

backendFolderPath.forEach(item => fs.readdirSync(item).map(file => {
  inputBE.push(item + '/' + file);
}));

generateDocumentation({
  inputFiles: files,
  outputFile: './docs/frontend/index.md',
  buildOptions: {
    types: true
  }
});

generateDocumentation({
  inputFiles: inputBE,
  outputFile: './docs/backend/index.md',
  buildOptions: {
    types: true
  }
});