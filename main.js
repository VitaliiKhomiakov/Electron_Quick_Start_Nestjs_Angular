// main.js
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Путь к preload скрипту
    }
  });
  require(path.join(__dirname, 'background/dist/main.js'));
  mainWindow.loadFile(path.join(__dirname, 'ui/dist/browser/index.html'));

  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.webContents.openDevTools();
  // });
}

app.whenReady().then(() => {
  createWindow();

  const menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu);
});

