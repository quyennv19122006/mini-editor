import * as monaco from 'monaco-editor';
import './userWorker';
import './style.css';

const editor = monaco.editor.create(document.querySelector('#container')!, {
  model: monaco.editor.createModel(
    `function test()\nprint('hello')\nend`,
    'lua'
  ),
  theme: 'vs-dark',
  tabSize: 2
});
