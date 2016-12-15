'use strict';

const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    resizable: false,
    frame: false
  });

  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});


/*
node


electron


mdl
https://getmdl.io/components/index.html#layout-section/grid


Please
http://www.checkman.io/please/



chance
http://chancejs.com/#avatar


adorable.io
http://avatars.adorable.io/


*/
